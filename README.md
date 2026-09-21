# Kashish Sevak — Portfolio

A personal MERN Stack Developer portfolio, built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Replacing the profile photo

The photo is loaded from `public/images/profile.jpg` and used in both the Hero and About sections.

To use your own photo:
1. Add your image to `public/images/`.
2. Name it `profile.jpg` (or update the `src` in `src/components/Hero.jsx` and `src/components/About.jsx` if you use a different name/extension).
3. A roughly square portrait, at least 800×800px, works best with the circular frames.

If the file is missing, a "KS" monogram placeholder is shown automatically, so the site never breaks.

## Editing content

- **Skills** — `src/data/skills.js` (badge colours in `src/data/skillIcons.js`)
- **Projects** — `src/data/projects.js` (each entry has an `accent` colour for its card)
- **Contact details** — top of `src/components/Contact.jsx` (email, GitHub, LinkedIn)
- **Hero copy / intro** — `src/components/Hero.jsx`
- **About copy** — `src/components/About.jsx`

## Tech

- React 18 + Vite
- Plain CSS (design tokens in `src/index.css`), no UI framework
- [Lenis](https://github.com/darkroomengineering/lenis) for inertia-based smooth scrolling
- Dependency-free inline SVG icons (`src/components/Icons.jsx`)
- Deploys as-is to Vercel, Netlify, or any static host (`npm run build` → `dist/`)

## Design system

- **Dark, windowed canvas** — a boxed `.shell` layout sits on a darker, dot-grid-textured backdrop so large screens get a premium "floating panel" feel. A sticky top nav (`src/components/TopNav.jsx`) replaces a traditional full-width navbar, with an animated underline on the active link.
- **Custom cursor** — a lerp-smoothed ring plus a dot that track the pointer and grow/glow over interactive elements (`src/components/CustomCursor.jsx`). Automatically disabled on touch devices and when the OS is set to reduce motion.
- **Smooth scrolling** — powered by Lenis (`src/hooks/useSmoothScroll.js`), with a matching scroll-progress bar at the top of the viewport and a floating back-to-top button.
- **Circular photo frames** — the hero photo and the About section's profile card both use a conic-gradient accent ring around a circular photo (with an automatic "KS" monogram fallback if `profile.jpg` is missing).
- **Icon-badge skills grid** — each skill in `src/data/skills.js` is matched to a colour in `src/data/skillIcons.js` and rendered as a small badge with an accent underline, grouped by category.
- **Color-coded project cards** — each project in `src/data/projects.js` carries an `accent` hex color used for its card's top bar, dot, and tag — GlowEssence (pink), the e-commerce app (blue), the blog (green) — plus a subtle 3D tilt-on-hover (`src/hooks/useTilt.js`).
- **Motion** — a single fade-up reveal per section on first view, staggered card/row entrances, a rotating dashed ring and floating chips around the hero photo, and a subtle magnetic pull on the primary hero button. All motion respects `prefers-reduced-motion`.

## Project structure

```
src/
  components/   UI components + their scoped CSS files
  data/         Editable content (skills, skill badge colours, projects)
  hooks/        useReveal, useScrollSpy, useSmoothScroll, useTilt, useMagnetic
  App.jsx       Section layout
  main.jsx      React entry point
  index.css     Design tokens, resets, shared classes, shell/backdrop layout
public/
  images/       profile.jpg, favicon.svg
```
