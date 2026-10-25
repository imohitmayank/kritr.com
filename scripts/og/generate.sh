#!/usr/bin/env bash
# Rebuild public/og-mylabstory.mp4 and public/og-mylabstory.jpg.
# Kritr homepage OG files are not touched.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$ROOT/../.." && pwd)"
cd "$ROOT"

bash "$ROOT/fonts.sh"
python3 "$ROOT/prepare-assets.py"

if [[ ! -d "$ROOT/node_modules/playwright-core" ]]; then
  npm init -y >/dev/null
  npm install --silent playwright-core@1.55.0
fi

export CHROME_PATH="${CHROME_PATH:-/usr/bin/google-chrome}"

echo "Measuring safe zone on preview frames"
node "$ROOT/capture.mjs"

if [[ "${PREVIEW_ONLY:-}" == "1" ]]; then
  echo "PREVIEW_ONLY set; skipping full encode"
  exit 0
fi

echo "Rendering full frame sequence"
node "$ROOT/capture.mjs" --full

echo "Encoding MP4"
ffmpeg -y -framerate 30 -i "$ROOT/frames-mls/%04d.png" \
  -f lavfi -i anullsrc=channel_layout=stereo:sample_rate=44100 \
  -vf "scale=1200:630:flags=lanczos,format=yuv420p,setsar=1" \
  -c:v libx264 -profile:v main -level 4.0 -pix_fmt yuv420p \
  -crf 20 -preset slow -movflags +faststart \
  -c:a aac -b:a 48k -ac 2 \
  -shortest \
  "$REPO/public/og-mylabstory.mp4"

echo "Writing poster from frame 0"
ffmpeg -y -i "$ROOT/frames-mls/0000.png" \
  -vf "scale=1200:630:flags=lanczos" \
  -q:v 3 \
  "$REPO/public/og-mylabstory.jpg"

ffprobe -hide_banner -show_entries format=duration,size -show_streams \
  "$REPO/public/og-mylabstory.mp4"
file "$REPO/public/og-mylabstory.jpg" "$REPO/public/og-mylabstory.mp4"
ls -la "$REPO/public/og-mylabstory.jpg" "$REPO/public/og-mylabstory.mp4"
