#!/bin/bash

set -e
SCRIPT_DIR=$(pwd)
OUTPUT_DIR="build/Packages"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"
echo "🚀 Packing all workspaces..."
workspaces=$(yarn workspaces list --json | jq -r 'select(.location != ".") | .name')

for workspace in $workspaces; do
    echo "📦 Packing $workspace..."
    cd "$(yarn workspace "$workspace" exec pwd)" || exit
    filename=$(echo "$workspace" | sed 's/\//-/g; s/@//g')
    yarn workspace "$workspace" pack --filename "$filename.tgz"
    mv "$filename.tgz" "$SCRIPT_DIR/$OUTPUT_DIR/"
done

echo "✅ All packages packed in $OUTPUT_DIR/"
