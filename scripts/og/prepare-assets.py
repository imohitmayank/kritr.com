#!/usr/bin/env python3
"""Cut the MyLabStory phone and logo used by the Open Graph composition.

The phone is the device in public/mylabstory/screenshots/trends.webp, with the
blue marketing background removed so it can sit on the OG gradient.
"""

from __future__ import annotations

import argparse
import os
from collections import deque
from pathlib import Path

from PIL import Image

# trends.webp crop that isolates the phone from the marketing background.
PHONE_CROP_BOX = (62, 294, 494, 1172)
LOGO_SIZE = 256


def is_exterior_bg(r: int, g: int, b: int) -> bool:
    return b > 175 and g > 135 and r < 200 and (b - r) > 35 and r > 60 and g < 230


def flood_clear_exterior_blue(crop: Image.Image) -> int:
    w, h = crop.size
    px = crop.load()
    seen = bytearray(w * h)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    cleared = 0
    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h:
            continue
        i = y * w + x
        if seen[i]:
            continue
        seen[i] = 1
        r, g, b, a = px[x, y]
        if not is_exterior_bg(r, g, b):
            continue
        px[x, y] = (r, g, b, 0)
        cleared += 1
        q.append((x + 1, y))
        q.append((x - 1, y))
        q.append((x, y + 1))
        q.append((x, y - 1))
    return cleared


def is_fringe(r: int, g: int, b: int, a: int) -> bool:
    if a == 0:
        return False
    if r > 245 and g > 245 and b > 245:
        return False
    return (b > r + 25) and b > 150 and g > 110 and r < 190 and abs(g - b) < 80


def remove_blue_fringe(im: Image.Image, iterations: int = 6) -> Image.Image:
    w, h = im.size
    px = im.load()
    for iteration in range(iterations):
        kill: list[tuple[int, int]] = []
        for y in range(h):
            for x in range(w):
                r, g, b, a = px[x, y]
                if not is_fringe(r, g, b, a):
                    continue
                near = False
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    xx, yy = x + dx, y + dy
                    if xx < 0 or yy < 0 or xx >= w or yy >= h or px[xx, yy][3] == 0:
                        near = True
                        break
                if near:
                    kill.append((x, y))
        for x, y in kill:
            r, g, b, _ = px[x, y]
            px[x, y] = (r, g, b, 0)
        print(f"fringe iter {iteration}: killed {len(kill)} px")
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im


def prepare_phone(trends_path: Path, out_path: Path) -> tuple[int, int]:
    im = Image.open(trends_path).convert("RGBA")
    crop = im.crop(PHONE_CROP_BOX)
    cleared = flood_clear_exterior_blue(crop)
    bbox = crop.getbbox()
    print(f"crop {crop.size[0]}x{crop.size[1]} cleared {cleared} bbox {bbox}")
    trimmed = crop.crop(bbox) if bbox else crop
    trimmed = remove_blue_fringe(trimmed)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    trimmed.save(out_path)
    print(f"saved phone {trimmed.size} -> {out_path}")
    return trimmed.size


def prepare_logo(logo_path: Path, out_path: Path, size: int = LOGO_SIZE) -> None:
    logo = Image.open(logo_path).convert("RGBA")
    logo = logo.resize((size, size), Image.Resampling.LANCZOS)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    logo.save(out_path)
    print(f"saved logo {logo.size} -> {out_path}")


def main() -> None:
    script_dir = Path(__file__).resolve().parent
    default_repo = Path(os.environ.get("KRITR_REPO", script_dir.parents[1]))

    parser = argparse.ArgumentParser(description="Prepare MyLabStory OG assets")
    parser.add_argument(
        "--trends",
        type=Path,
        default=default_repo / "public/mylabstory/screenshots/trends.webp",
    )
    parser.add_argument(
        "--logo-src",
        type=Path,
        default=default_repo / "public/mylabstory-logo.png",
    )
    parser.add_argument("--out-dir", type=Path, default=script_dir / "assets")
    args = parser.parse_args()

    prepare_phone(args.trends, args.out_dir / "phone.png")
    prepare_logo(args.logo_src, args.out_dir / "logo.png")


if __name__ == "__main__":
    main()
