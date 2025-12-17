# Project Technologies

This document outlines the technologies and libraries used in the `portfolio-web` project.

## Core Framework & Language
- **Framework**: [Next.js 15.2.4](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Library**: [React 19](https://react.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/) (Inferred from lockfile)

## UI & Styling
- **Styling Engine**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/) (Extensively used via shadcn/ui)
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/)
  - Extensive set of components installed including `Sidebar`, `Calendar`, `Carousel`, `Chart`, `Dialog`, `Form`, `Sheet`, etc.
  - Configured with "new-york" style and "neutral" base color.
- **Animations**: 
  - [Framer Motion](https://www.framer.com/motion/)
  - `tailwindcss-animate`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) (via `next/font/google`)
- **Theming**: `next-themes` (Dark/Light mode support)
- **Toast Notifications**: `sonner` and `toaster`
- **Utilities**:
  - `clsx` & `tailwind-merge` for class name conditional merging
  - `class-variance-authority` (CVA) for component variants

## Data & State Management
- **Backend/Database**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
- **Schema Validation**: [Zod](https://zod.dev/) (Used in Actions)
- **Local State Management**: React Context API
  - `LanguageProvider` (Internationalization)
  - `HeaderVisibilityContext`

## Build & Configuration tools
- **Compiler**: Next.js Compiler (Rust-based)
- **CSS Processing**: PostCSS, Autoprefixer
- **Linting**: ESLint (Checks disabled during build in `next.config.mjs`)
- **Type Checking**: TypeScript (Checks disabled during build in `next.config.mjs`)

## Additional Configuration Notes
- **Images**: `unoptimized: true` in `next.config.mjs` (Standard Next.js Image Optimization is disabled, possibly for static export compatibility or cost optimization).
- **Internationalization (i18n)**: Custom implementation using JSON files (`es.json`, `en.json`) and Context.
- **Tailwind Config**:
  - Custom color palettes: `editorial` (grays) and `electric` (blues).
  - Custom animations: `accordion`, `cursor-blink`, `float`, `pulse-subtle`, `rotate-slow`, `gradient-shift`, `scroll-down`, `fade-in-up`.
  - Custom focus ring styles and typography plugin.
