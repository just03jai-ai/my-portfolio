#!/usr/bin/env python3
import os
import shutil
import struct
import tempfile
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DOCX = ROOT / "documents" / "Sales-Order-Case-Study.docx"

FIGURES = [
    ("Figure 1", ROOT / "assets" / "pro-v1-in-review.png", 2.75),
    ("Figure 2", ROOT / "assets" / "os-v1-add-margin.png", 6.45),
    ("Figure 3", ROOT / "assets" / "os-v2-journey.png", 6.45),
    ("Figure 4", ROOT / "assets" / "v2-pro-final.png", 2.55),
    ("Figure 5", ROOT / "assets" / "v2-os-final.png", 6.45),
    ("Figure 6", ROOT / "assets" / "os-v3-journey.png", 6.45),
]

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
    "pr": "http://schemas.openxmlformats.org/package/2006/relationships",
    "ct": "http://schemas.openxmlformats.org/package/2006/content-types",
}
for prefix, uri in NS.items():
    if prefix not in ("pr", "ct"):
        ET.register_namespace(prefix, uri)


def q(prefix, name):
    return f"{{{NS[prefix]}}}{name}"


def png_size(path):
    with open(path, "rb") as f:
        header = f.read(24)
    if header[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"Not a PNG: {path}")
    return struct.unpack(">II", header[16:24])


def image_paragraph(rel_id, name, width_in, height_in, docpr_id):
    cx = int(width_in * 914400)
    cy = int(height_in * 914400)
    p = ET.Element(q("w", "p"))
    ppr = ET.SubElement(p, q("w", "pPr"))
    jc = ET.SubElement(ppr, q("w", "jc"))
    jc.set(q("w", "val"), "center")
    spacing = ET.SubElement(ppr, q("w", "spacing"))
    spacing.set(q("w", "before"), "120")
    spacing.set(q("w", "after"), "60")
    r = ET.SubElement(p, q("w", "r"))
    drawing = ET.SubElement(r, q("w", "drawing"))
    inline = ET.SubElement(drawing, q("wp", "inline"))
    inline.set("distT", "0")
    inline.set("distB", "0")
    inline.set("distL", "0")
    inline.set("distR", "0")
    extent = ET.SubElement(inline, q("wp", "extent"))
    extent.set("cx", str(cx))
    extent.set("cy", str(cy))
    effect = ET.SubElement(inline, q("wp", "effectExtent"))
    for side in ("l", "t", "r", "b"):
        effect.set(side, "0")
    docpr = ET.SubElement(inline, q("wp", "docPr"))
    docpr.set("id", str(docpr_id))
    docpr.set("name", name)
    docpr.set("descr", name)
    frame = ET.SubElement(inline, q("wp", "cNvGraphicFramePr"))
    locks = ET.SubElement(frame, q("a", "graphicFrameLocks"))
    locks.set("noChangeAspect", "1")
    graphic = ET.SubElement(inline, q("a", "graphic"))
    graphic_data = ET.SubElement(graphic, q("a", "graphicData"))
    graphic_data.set("uri", "http://schemas.openxmlformats.org/drawingml/2006/picture")
    pic = ET.SubElement(graphic_data, q("pic", "pic"))
    nv = ET.SubElement(pic, q("pic", "nvPicPr"))
    cnv = ET.SubElement(nv, q("pic", "cNvPr"))
    cnv.set("id", "0")
    cnv.set("name", name)
    ET.SubElement(nv, q("pic", "cNvPicPr"))
    fill = ET.SubElement(pic, q("pic", "blipFill"))
    blip = ET.SubElement(fill, q("a", "blip"))
    blip.set(q("r", "embed"), rel_id)
    stretch = ET.SubElement(fill, q("a", "stretch"))
    ET.SubElement(stretch, q("a", "fillRect"))
    sppr = ET.SubElement(pic, q("pic", "spPr"))
    xfrm = ET.SubElement(sppr, q("a", "xfrm"))
    off = ET.SubElement(xfrm, q("a", "off"))
    off.set("x", "0")
    off.set("y", "0")
    ext = ET.SubElement(xfrm, q("a", "ext"))
    ext.set("cx", str(cx))
    ext.set("cy", str(cy))
    geom = ET.SubElement(sppr, q("a", "prstGeom"))
    geom.set("prst", "rect")
    ET.SubElement(geom, q("a", "avLst"))
    return p


def paragraph_text(p):
    return "".join(t.text or "" for t in p.iter(q("w", "t")))


def main():
    with tempfile.TemporaryDirectory() as td:
        with zipfile.ZipFile(DOCX) as zin:
            zin.extractall(td)

        document_path = os.path.join(td, "word", "document.xml")
        rels_path = os.path.join(td, "word", "_rels", "document.xml.rels")
        types_path = os.path.join(td, "[Content_Types].xml")
        media_dir = os.path.join(td, "word", "media")
        os.makedirs(media_dir, exist_ok=True)

        doc_tree = ET.parse(document_path)
        doc_root = doc_tree.getroot()
        body = doc_root.find(q("w", "body"))
        rels_tree = ET.parse(rels_path)
        rels_root = rels_tree.getroot()
        types_tree = ET.parse(types_path)
        types_root = types_tree.getroot()

        if not any(x.get("Extension") == "png" for x in types_root):
            default = ET.SubElement(types_root, q("ct", "Default"))
            default.set("Extension", "png")
            default.set("ContentType", "image/png")

        existing_ids = [r.get("Id", "") for r in rels_root]
        numeric = [int(x[3:]) for x in existing_ids if x.startswith("rId") and x[3:].isdigit()]
        next_rel = max(numeric or [0]) + 1

        for idx, (marker, src, width_in) in enumerate(FIGURES, start=1):
            image_name = f"figure-{idx}.png"
            shutil.copyfile(src, os.path.join(media_dir, image_name))
            wpx, hpx = png_size(src)
            height_in = width_in * hpx / wpx
            rel_id = f"rId{next_rel}"
            next_rel += 1
            rel = ET.SubElement(rels_root, q("pr", "Relationship"))
            rel.set("Id", rel_id)
            rel.set("Type", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image")
            rel.set("Target", f"media/{image_name}")

            caption = next((p for p in body.findall(q("w", "p")) if marker in paragraph_text(p)), None)
            if caption is None:
                raise RuntimeError(f"Caption not found: {marker}")
            insert_at = list(body).index(caption)
            body.insert(insert_at, image_paragraph(rel_id, marker, width_in, height_in, idx + 100))

        doc_tree.write(document_path, encoding="UTF-8", xml_declaration=True)
        rels_tree.write(rels_path, encoding="UTF-8", xml_declaration=True)
        types_tree.write(types_path, encoding="UTF-8", xml_declaration=True)

        out = Path(f"{DOCX}.new")
        with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zout:
            for root, _, files in os.walk(td):
                for file in files:
                    path = os.path.join(root, file)
                    zout.write(path, os.path.relpath(path, td))
        os.replace(out, DOCX)


if __name__ == "__main__":
    main()
