#!/bin/bash

# 더 강력한 빌드 스크립트

echo "🛑 Stopping existing containers..."
docker-compose down 2>/dev/null

echo "🧹 Deep cleaning..."
# 임시 디렉토리 생성
TEMP_DIR="/tmp/ontotrade-build-$$"
mkdir -p "$TEMP_DIR"

# 필요한 파일만 복사 (._* 제외)
rsync -av --exclude="._*" --exclude="_*.*" --exclude=".git" \
  /Volumes/samsungSSD/kelly_project/homepage/OntoTradeHomePage/ \
  "$TEMP_DIR/OntoTradeHomePage/"

rsync -av --exclude="._*" --exclude="_*.*" \
  /Volumes/samsungSSD/kelly_project/homepage/dockers/ \
  "$TEMP_DIR/dockers/"

# 임시 디렉토리에서 빌드
cd "$TEMP_DIR/dockers"

echo "🐳 Building from clean copy..."
docker-compose up --build

# 정리
echo "🧹 Cleaning up temp files..."
rm -rf "$TEMP_DIR"