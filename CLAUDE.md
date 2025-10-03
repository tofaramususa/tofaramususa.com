# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Tofara Mususa built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases bio, work experience, and technical skills through a single-page layout with custom styling.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom prose utilities
- **UI Components**: shadcn/ui (default style)
- **Package Manager**: pnpm
- **Analytics**: Vercel Analytics

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

## Architecture

### Directory Structure

```
src/app/              # Next.js App Router pages
  ├── page.tsx        # Home page (main bio content)
  ├── layout.tsx      # Root layout with Navbar, Footer, Analytics
  ├── globals.css     # Global styles and Tailwind imports
  └── components/     # App-specific components (e.g., Navbar)

components/           # Shared components
  ├── craft.tsx       # Layout wrapper components (Layout, Main) with prose styling
  ├── pageLinks.tsx   # Navigation utilities
  └── ui/             # shadcn/ui components

lib/                  # Utilities
  ├── data.ts         # Site navigation data
  └── utils.ts        # Tailwind utility functions (cn)
```

### Key Components

**Layout System** (`components/craft.tsx`):
- `Layout`: HTML wrapper with scroll-smooth behavior
- `Main`: Content wrapper with Tailwind prose styling and custom typography classes
- `cn()`: Utility for merging Tailwind classes

**Root Layout** (`src/app/layout.tsx`):
- Wraps all pages with Navbar, Footer, and Analytics
- Metadata configured for SEO (title, description, metadataBase)
- Uses `@/` path aliases for imports

**Home Page** (`src/app/page.tsx`):
- Single-page Q&A format covering bio, work, education, and business
- Direct content in TSX (no CMS or MDX)

### Styling Approach

- Custom Tailwind prose utilities defined in `components/craft.tsx`
- Prose customizations: heading sizes, paragraph spacing, link styling (no underlines, color transitions)
- Global animations via Tailwind (fade-in classes)
- shadcn/ui configured with slate base color and CSS variables

### Configuration

- **Path Aliases**: `@/*` maps to root directory
- **shadcn/ui**: Components installed to `@/components`, utils to `@/lib/utils`
- **TypeScript**: Strict mode enabled, using bundler module resolution

## Notes

- Content is hardcoded in `page.tsx` - update directly for bio changes
- Navigation links defined in `lib/data.ts` but routes may not be implemented yet
- Uses Vercel Analytics - ensure environment variables are set for production deployments
