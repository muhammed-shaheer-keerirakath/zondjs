#!/bin/bash

set -e
SCRIPT_DIR=$(pwd)
OUTPUT_DIR="build/Packages"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
echo "🚀 Packing all workspaces..."
workspaces=$(jq -r '.workspaces[]' package.json)

for workspace in $workspaces; do
    echo "📦 Packing $workspace..."
    cd "$SCRIPT_DIR/$workspace" || exit
    filename=$(echo "$workspace" | sed 's/\//-/g; s/@//g')
    npm pack --pack-destination "$SCRIPT_DIR/$OUTPUT_DIR/"
done

echo "✅ All packages packed in $OUTPUT_DIR/"
