# MyLabStory Open Graph assets

`public/og-mylabstory.mp4` and `public/og-mylabstory.jpg` are generated from `mylabstory.html`.

The canvas is exactly 1200×630. Logo, headline (“Your health journey, decoded.”), subcopy, the lab/trend card, and the full phone stay inside an inset of about 8–10% (at least 96px from the left and right, 50px from the top and bottom) so iMessage and other link cards can cover-crop the frame without cutting the type or the bezel. The gradient background still runs to the edge.

The clip is a silent 6.4s loop: the blood-report card crossfades into a hemoglobin trend, the line draws, then the report returns so the first and last frames match. Playback is H.264 Main, `yuv420p`, `+faststart`, with a silent AAC track from `anullsrc`.

Kritr’s homepage files (`og-kritr.jpg`, `og-kritr.mp4`) are a separate composition and are not produced here.

## Regenerate

From the repo root, with Chrome, ffmpeg, Python 3 (Pillow), and Node:

```bash
bash scripts/og/generate.sh
```

`PREVIEW_ONLY=1 bash scripts/og/generate.sh` renders a few frames under `scripts/og/preview-mls/` and checks the safe zone without encoding. Fonts, the cut-out phone, and frame PNGs are local build output and are gitignored.

Page metadata for the image and the video is 1200×630 in `app/mylabstory/page.tsx`.
