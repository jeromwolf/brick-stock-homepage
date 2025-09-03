# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This repository contains the OntoTrade Homepage project with Docker configuration:

```
homepage/
├── .claude/                    # Claude settings
├── dockers/                    # Docker configuration (상위 레벨)
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── docker-build.sh        # 외장하드 빌드 스크립트
├── OntoTradeHomePage/         # Next.js 프로젝트
│   ├── app/                   # Next.js App Router
│   ├── components/            # React 컴포넌트
│   ├── dockers/               # 프로젝트 내부 Docker 설정
│   └── package.json
└── CLAUDE.md                  # 이 파일
```

## Development Commands

### Next.js 프로젝트 (OntoTradeHomePage 디렉토리에서)
```bash
# 의존성 설치
npm install

# 개발 서버 실행 (포트 9001)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린팅
npm run lint
```

### Docker 실행 (상위 dockers 디렉토리에서)
```bash
cd dockers
docker-compose up --build

# 또는 외장하드 문제 해결 스크립트
./docker-build.sh
```

## 기술 스택

- **Frontend**: Next.js 15.4.1, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Containerization**: Docker
- **Node.js**: v20 (Alpine Linux in Docker)

## 주요 특징

1. **OntoTrade 금융 솔루션 플랫폼 홈페이지**
   - FluxNews: 실시간 뉴스 영향 분석
   - A2A Sentiment Analysis: 멀티에이전트 투자 분석
   - OntoTrade Platform: 통합 금융 분석 플랫폼

2. **Docker 설정**
   - 두 개의 dockers 디렉토리 존재 (상위/프로젝트 내부)
   - codeindocker.com 배포를 위한 구조

3. **macOS 외장하드 이슈**
   - ._* 파일 자동 생성 문제
   - docker-build.sh 스크립트로 해결
   - .gitignore에 ._* 및 _*.* 패턴 추가됨

## GitHub Repository

- Repository: https://github.com/jeromwolf/brick-stock-homepage
- 전체 homepage 디렉토리가 루트로 푸시됨

## 중요 사항

- **포트**: 개발 서버는 9001번, Docker는 3000번 사용
- **next.config.js**: output: 'export' 제거됨 (Docker 실행을 위해)
- **외장하드 작업 시**: docker-build.sh 또는 docker-clean-build.sh 사용 권장