#!/bin/bash

VIDEO_PATH="${1:-./playground.mov}"
SCALE="${2:-640}"
FPS="${3:-12}"

# Extract filename without extension
VIDEO_NAME=$(basename "$VIDEO_PATH" | sed 's/\.[^.]*$//')

PALETTE_PATH="./${VIDEO_NAME}_palette.png"
OUTPUT_PATH="./${VIDEO_NAME}.gif"

ffmpeg -i "$VIDEO_PATH" \
  -vf "fps=$FPS,scale=$SCALE:-1:flags=lanczos,palettegen=stats_mode=diff" \
  "$PALETTE_PATH"

ffmpeg -i "$VIDEO_PATH" -i "$PALETTE_PATH" \
  -lavfi "fps=$FPS,scale=$SCALE:-1:flags=lanczos [x]; [x][1:v] paletteuse=dither=sierra2_4a" \
  "$OUTPUT_PATH"

rm "$PALETTE_PATH"