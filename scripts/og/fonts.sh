#!/usr/bin/env bash
# Download the woff2 files the MyLabStory OG composition embeds.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$ROOT/fonts"
cd "$ROOT/fonts"

download() {
  local url="$1"
  local out="$2"
  if [[ -s "$out" ]]; then
    return
  fi
  echo "GET $url"
  curl -fsSL -o "$out" "$url"
}

download "https://cdn.jsdelivr.net/fontsource/fonts/newsreader@5.2.8/latin-500-normal.woff2" newsreader-500.woff2
download "https://cdn.jsdelivr.net/fontsource/fonts/manrope@5.2.6/latin-400-normal.woff2" manrope-400.woff2
download "https://cdn.jsdelivr.net/fontsource/fonts/manrope@5.2.6/latin-500-normal.woff2" manrope-500.woff2
download "https://cdn.jsdelivr.net/fontsource/fonts/manrope@5.2.6/latin-600-normal.woff2" manrope-600.woff2
download "https://cdn.jsdelivr.net/fontsource/fonts/manrope@5.2.6/latin-700-normal.woff2" manrope-700.woff2
