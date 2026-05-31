# X-Template V.0.0.0-Genesis

> Cyberpunk Glassmorphism starter template — React + TypeScript + Vite

[![Deploy to GitHub Pages](https://github.com/Ex2-Axon/x-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ex2-Axon/x-template/actions/workflows/deploy.yml)
[![Bluesky](https://img.shields.io/badge/Bluesky-%40microtronic.bsky.social-0085ff?logo=bluesky&logoColor=white)](https://bsky.app/profile/microtronic.bsky.social)

**Live demo:** https://ex2-axon.github.io/x-template/

![Screenshot](screenshot.png)

---

## Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build tool** | Vite 8 |
| **Styling** | CSS (Glassmorphism + Neon) + Tailwind CSS 4 |
| **Package manager** | pnpm |
| **Deploy** | GitHub Pages (auto on push) |

---

## Features

- Cyberpunk glassmorphism UI with full animation
- Neon glow effects — cyan, pink, purple, green
- Animated grid background + floating particles
- Glitch text effect on title
- Scanline CRT overlay
- Orbit rings on hero image
- Staggered entrance animations
- Auto-deploy to GitHub Pages on push
- Auto-post to Discord, Bluesky, X on push

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

---

## GitHub Actions Workflows

| Workflow | Trigger | Description |
|---|---|---|
| `deploy.yml` | push to main | Build & deploy to GitHub Pages |
| `discord-notify.yml` | push to main | Send release embed to Discord |
| `bluesky-notify.yml` | push to main | Post release to Bluesky |
| `x-notify.yml` | push to main | Post release to X (Twitter) |

### Required Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Description |
|---|---|
| `DISCORD_WEBHOOK_URL` | Discord webhook URL |
| `BSKY_IDENTIFIER` | Bluesky handle (e.g. `microtronic.bsky.social`) |
| `BSKY_APP_PASSWORD` | Bluesky app password |
| `X_API_KEY` | X Consumer Key |
| `X_API_SECRET` | X Consumer Secret |
| `X_ACCESS_TOKEN` | X Access Token |
| `X_ACCESS_TOKEN_SECRET` | X Access Token Secret |

---

## Project Structure

```
x-template/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       ├── discord-notify.yml
│       ├── bluesky-notify.yml
│       └── x-notify.yml
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

---

## Connect

- Bluesky: [@microtronic.bsky.social](https://bsky.app/profile/microtronic.bsky.social)
- Discord: [Join server](https://discord.gg/8Zeq8VCU)
- GitHub: [Ex2-Axon](https://github.com/Ex2-Axon)

## Generation Prompt
```text
You are building a daily UI project. Below is the theme specification for today.

## Theme Context (daily-context.json)
```json
{
  "day": 38,
  "date": "2026-05-31",
  "version": "1.38.0",
  "project_name": "x-template-038",
  "theme": {
    "name": "BIOLUMINOUS BAUHAUS GROVE",
    "style": "A sophisticated fusion of dark cottagecore mystique and Bauhaus precision, rendered with ultra-modern cybernetic elements. Think glowing, geometrically structured organic forms in a deeply luxurious, shadow-rich digital landscape where digital flora intertwines with rigid architectural frameworks, bathed in ethereal luminescence.",
    "mood": "Ethereal, Structured, Mystical, Luminescent, Precision"
  },
  "palette": {
    "background": "#0D1110",
    "surface": "#1A2420",
    "primary": "#3D6C4A",
    "accent": "#5CFF8C",
    "text": "#F0F0F0",
    "muted": "#6B8B75"
  },
  "typography": {
    "heading": "Clash Display",
    "body": "Outfit",
    "size": "fluid-optimized-scale"
  },
  "layout": {
    "structure": "deconstructed-modular-grid-with-organic-overlays",
    "density": "dynamic-compact",
    "border_style": "Geometric outlines with ethereal inner glows and subtle organic textural details"
  },
  "animation": {
    "level": "high",
    "style": "Bioluminescent particle trails, organic growth reveal animations, magnetic field interactions on UI elements, subtle depth-of-field shifts on scroll."
  },
  "components": {
    "hero_text": "ARCANE BOTANICA",
    "subtitle": "Unearthing digital flora within structured realms. A synthesis of organic mystique and cybernetic precision.",
    "button_label": "SYNTHESIZE GROVES",
    "badge_text": "BIOCYCLE_ALPHA"
  },
  "commit_message": "feat: UI Day 38 — Experimental Theme",
  "source": "gemini-key1",
  "selected_component": {
    "category": "Cards",
    "component": "myshy13_tender-donkey-10.html",
    "path": "C:\\Users\\User\\Documents\\GitHub\\Axon\\x-components\\Cards\\myshy13_tender-donkey-10.html",
    "content": "<div class=\"card\"></div>\n\n<style>\n/* Tags: card */\n.card {\n  font-family: monospace;\n  scale: 1.2;\n  height: 15em;\n  width: 20em;\n  border-radius: 0.8em;\n  background: #222;\n  overflow: hidden;\n  color: #ccc;\n\n  transition: 0.3s ease;\n  &:before {\n    content: \"User - zsh\";\n    text-align: center;\n    padding: 0.2em;\n    display: block;\n    background-color: #4e4e4e;\n  }\n  &:after {\n    content: \"User@device ~ $ \";\n    margin: 0.2em;\n  }\n  &:hover {\n    scale: 1.3;\n  }\n}\n\n</style>"
  }
}
```

## Selected Component Reference
- Category: Cards
- Component: myshy13_tender-donkey-10.html
- Path: C:\Users\User\Documents\GitHub\Axon\x-components\Cards\myshy13_tender-donkey-10.html

Use the selected component HTML below as the primary design reference for the new UI. Keep the structure and styling assumptions in mind while rewriting the requested files.
```html
<div class="card"></div>

<style>
/* Tags: card */
.card {
  font-family: monospace;
  scale: 1.2;
  height: 15em;
  width: 20em;
  border-radius: 0.8em;
  background: #222;
  overflow: hidden;
  color: #ccc;

  transition: 0.3s ease;
  &:before {
    content: "User - zsh";
    text-align: center;
    padding: 0.2em;
    display: block;
    background-color: #4e4e4e;
  }
  &:after {
    content: "User@device ~ $ ";
    margin: 0.2em;
  }
  &:hover {
    scale: 1.3;
  }
}

</style>
```

## Your Task
Completely redesign the UI by rewriting these three files from scratch:
- `src/App.tsx`
- `src/App.css`
- `src/index.css`

## Rules for App.tsx
1. Keep ALL existing imports:
   - `import { useState, useEffect, useRef } from 'react'`
   - `import reactLogo from './assets/react.svg'`
   - `import viteLogo from './assets/vite.svg'`
   - `import heroImg from './assets/hero.png'`
   - `import './App.css'`
2. Keep the `CounterNum` component (useRef + useEffect animation)
3. Keep the counter button with `onClick` / `setCount` handler
4. Keep the Documentation section (Vite/React links)
5. Keep the Social section (GitHub/Discord/X/Bluesky links + SVG icons)
6. Do NOT use CSS custom properties (`--var-name`) in inline `style` attributes - TypeScript will error

## Rules for CSS
- Apply the palette, typography, layout structure, animation level, and component text from the JSON above
- Use Google Fonts via `@import` in `index.css`
- Match the theme mood: Ethereal, Structured, Mystical, Luminescent, Precision

## Mandatory Requirements (apply to every build)

### 1. Responsive - Mobile First
- Design for mobile (320px) first, scale up with `min-width` breakpoints
- Touch targets minimum 44x44px
- No horizontal scroll on any screen size
- Fluid typography: use `clamp()` or responsive units (`rem`, `%`, `vw`)
- Images and layout must reflow gracefully at 320px, 768px, 1280px

### 2. Footer Copyright
- The page MUST have a `<footer>` at the bottom
- Footer text: `© 2026 Microtronic Co., Ltd. All rights reserved. Credit By Axon.`
- Legal: [Privacy Policy](https://microtronic-thailand.github.io/privacy-policy/?lang=en)
- Style the footer to match the theme palette (muted text on surface background)

### 3. SEO Standards
- `index.html` must have a descriptive `<title>`: `ARCANE BOTANICA - BIOLUMINOUS BAUHAUS GROVE | Microtronic`
- Add `<meta name="description">` with the subtitle: `Unearthing digital flora within structured realms. A synthesis of organic mystique and cybernetic precision.`
- Add `<meta name="keywords">` relevant to the theme
- Add Open Graph tags: `og:title`, `og:description`, `og:type` (website)
- All images must have meaningful `alt` attributes
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` where appropriate
- Heading hierarchy: one `<h1>` (hero), `<h2>` for sections - no skipping levels

## After saving all files
1. Update `version` in `package.json` to `1.38.0`
2. Update `<title>` and meta tags in `index.html` as specified above
3. Run: `pnpm build`
4. If build succeeds → write `done` to `scripts/build-done.flag`
5. If build fails with TypeScript errors → fix them and rebuild

```
