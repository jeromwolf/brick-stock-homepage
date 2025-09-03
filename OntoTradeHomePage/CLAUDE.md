# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture Overview

This is a Next.js 14 marketing website for OntoTrade, an AI-powered financial solutions platform. The site showcases three main solutions:

1. **FluxNews** - Real-time news impact analysis using GPT-4
2. **A2A Sentiment Analysis** - Multi-agent investment analysis system
3. **OntoTrade Platform** - Integrated financial analysis platform

### Key Design Patterns

- **App Router**: Uses Next.js 14 App Router for routing
- **Component-Based**: Modular React components in `/components`
- **Tailwind CSS**: Utility-first CSS with custom theme colors
- **TypeScript**: Full type safety across the application
- **Responsive Design**: Mobile-first approach with breakpoints

### Important Files

- `app/layout.tsx` - Root layout with header/footer
- `app/page.tsx` - Homepage with Hero, Features, Solutions sections
- `components/Header.tsx` - Navigation with mobile menu
- `components/Solutions.tsx` - Solution cards with gradient styling
- `tailwind.config.ts` - Custom theme configuration