#!/bin/bash

# Docker 빌드 스크립트 - macOS 외장하드에서 ._* 파일 문제 해결

echo "🧹 Cleaning up ._ files..."
find /Volumes/samsungSSD/kelly_project/homepage -name "._*" -delete 2>/dev/null
find /Volumes/samsungSSD/kelly_project/homepage -name "_*.*" -delete 2>/dev/null

echo "🐳 Starting Docker build..."
cd /Volumes/samsungSSD/kelly_project/homepage/docker

# Docker build with no-cache option
docker-compose build --no-cache

echo "🚀 Starting container..."
docker-compose up