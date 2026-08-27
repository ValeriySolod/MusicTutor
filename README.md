# MusicTutor

MusicTutor is a landing page for a platform that connects students with
verified music teachers for online and in-person lessons.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- React
- TypeScript
- CSS Modules (no CSS framework)
- ESLint

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Lint the project:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Assets

Production assets live under [`public/assets`](public/assets):

- `public/assets/photos` — raster photography used by `next/image`.
- `public/assets/icons` — SVG icons referenced by stable `/assets/icons/*.svg` paths.
- `public/assets/backgrounds` — decorative SVG background graphics.

The original `MusicTutor-assets-complete/` package (including its `preview/`
folder) is kept locally as a source reference and is excluded from version
control via `.gitignore`.

## Current scope

This increment establishes the semantic and responsive foundation of the
landing page: project scaffolding, design tokens, and the eleven landing-page
sections (header/navigation, hero, teacher search panel, platform statistics,
key benefits, instrument categories, featured teachers, how it works, why
MusicTutor, final call to action, and footer) as composed, typed components.

The layout, structure, and accessibility basics are in place, but visual
design is not yet pixel-perfect against the Figma source, and the teacher
search panel is intentionally non-functional. The landing page is being
implemented incrementally in subsequent iterations.
