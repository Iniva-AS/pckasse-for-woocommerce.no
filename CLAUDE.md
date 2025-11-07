# CLAUDE.md

## Important Notes

- We are using a tempalte, that we are gong to prep for launcing the product
  PCKasse for WooCommerce (pckasse-for-woocommerce.no).
- The dashboard/app is located at https://app.pckasse-for-woocommerce.no.
- https://quick3-for-woocommerce.no is the other product we have, with it's own landingapge.
  I might reference this from time to time.
- We have a half finished landingpage in path ../../ . This is an astro project.
  I might reference this and ask if you can fetch some content or parts of that from
  time to time.
- It's going to be a 100% norwegian site, so we need to translate the content.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website built using the Salient template from Tailwind Plus. It's a commercial template using React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Typography**: Inter (sans) and Lexend (display) via next/font/google
- **UI Components**: Headless UI for accessible interactive components
- **Type System**: TypeScript with strict mode enabled

### Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── (auth)/              # Auth route group (login, register)
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Home page composition
├── components/              # React components
│   ├── Button.tsx
│   ├── CallToAction.tsx
│   ├── Container.tsx
│   ├── Faqs.tsx
│   ├── Fields.tsx           # Form field components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Logo.tsx
│   ├── NavLink.tsx
│   ├── Pricing.tsx
│   ├── PrimaryFeatures.tsx
│   ├── SecondaryFeatures.tsx
│   ├── SlimLayout.tsx
│   └── Testimonials.tsx
├── images/                  # Static images
│   ├── avatars/
│   ├── logos/
│   ├── screenshots/
│   └── background-*.jpg
└── styles/
    └── tailwind.css         # Tailwind configuration and theme
```

### Key Patterns

**Page Composition**: The home page (src/app/page.tsx) composes the layout from section components (Hero, PrimaryFeatures, SecondaryFeatures, CallToAction, Testimonials, Pricing, Faqs) wrapped in Header/Footer.

**Path Aliases**: Use `@/*` to import from `src/*` (configured in tsconfig.json)

**Styling Approach**:

- Tailwind CSS v4 uses native CSS features via @import
- Custom theme variables defined in src/styles/tailwind.css using @theme directive
- Typography scale and container sizes customized
- Forms plugin enabled via @plugin directive

**Fonts**: Two Google Fonts loaded with CSS variables:

- `--font-inter` for body text (sans)
- `--font-lexend` for display text (headings)

**Route Groups**: Auth pages use `(auth)` route group for shared layout without affecting URL structure

## Code Style

**Formatting**: Prettier configured with:

- Single quotes
- No semicolons
- Tailwind CSS class sorting via prettier-plugin-tailwindcss

**Linting**: ESLint with Next.js core web vitals config

**TypeScript**:

- Strict mode enabled
- Path aliases via `@/*`
- ES6 target with ESNext modules

## Important Notes

- This is a worktree branch (`salient-redesign`) - main branch is `main`
- Template is a commercial Tailwind Plus product
- Uses Tailwind CSS v4 (different from v3 - uses @import instead of @tailwind directives)
- React Server Components by default (App Router)
