# UXCode — Landing Page

A production-ready, static landing page for **UXCode**, a company offering AI and technical consulting services. The site is built with semantic HTML, custom CSS, and vanilla JavaScript — no frameworks, no build-time dependencies beyond Node.js.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Responsive layout** | Mobile-first design with dedicated breakpoints in `responsive.css` |
| **Scroll animations** | Intersection Observer–based reveal effects and animated counters (`animations.js`) |
| **Tilt card effects** | Subtle 3D tilt on service, result, and process cards (pointer-aware, respects `prefers-reduced-motion`) |
| **Scroll progress bar** | Visual indicator at the top of the viewport |
| **Active nav highlight** | Current section is automatically highlighted in the navigation |
| **Contact form** | Client-side validation with accessible error messages (`form-handler.js`) |
| **SEO ready** | Open Graph tags, Twitter Card meta, JSON-LD structured data, canonical URL, `robots.txt`, and `sitemap.xml` |
| **Accessibility** | Skip-to-content link, ARIA labels, `aria-live` regions, keyboard-friendly navigation |

---

## 🛠 Tech Stack

- **HTML5** — semantic markup with structured data (JSON-LD)
- **CSS3** — custom properties, CSS Grid, Flexbox, glassmorphism, gradient backgrounds
- **Vanilla JavaScript** — no runtime dependencies
- **Google Fonts** — *Public Sans* (body) and *Sora* (headings)
- **Node.js** — used only for the build script (`scripts/build.mjs`)

---

## 📁 Project Structure

```
UXcode/
├── index.html            # Main landing page
├── privacy.html          # Privacy policy
├── terms.html            # Terms of service
├── robots.txt            # Search-engine crawl rules
├── sitemap.xml           # XML sitemap for SEO
├── package.json          # npm scripts and metadata
├── README.md             # This file
│
├── css/
│   ├── main.css          # Global styles, layout, components, colors
│   ├── responsive.css    # Media-query breakpoints
│   └── animations.css    # Keyframe animations and reveal transitions
│
├── js/
│   ├── main.js           # Navigation, scroll handling, progress bar
│   ├── animations.js     # Scroll reveals, counter animation, tilt cards, parallax
│   └── form-handler.js   # Contact form validation and simulated submission
│
├── images/
│   ├── hero/             # Hero section and OG image assets
│   ├── services/         # Service card imagery
│   ├── icons/            # UI icons
│   └── logos/            # Brand logos
│
├── fonts/                # Self-hosted font files (if any)
│
└── scripts/
    └── build.mjs         # Node.js build script — copies assets to dist/
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18 (for the build script)
- **Python 3** (used by the dev server via `python3 -m http.server`)

### Install

No third-party packages are needed. Simply clone the repository:

```bash
git clone https://github.com/MahmoudAlmodalal/UXcode.git
cd UXcode
```

### Development Server

Start a local server on port **8080**:

```bash
npm run dev
```

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Production Build

Generate a `dist/` folder containing all files ready for deployment:

```bash
npm run build
```

Preview the built output:

```bash
npm run preview
```

The build script (`scripts/build.mjs`) cleans the `dist/` directory, then copies all HTML pages, CSS, JS, images, and fonts into it.

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Main landing page with hero, services, process, results, tech stack, and contact form |
| Privacy Policy | `privacy.html` | Privacy policy page |
| Terms of Service | `terms.html` | Terms of service page |

---

## 🎨 Customization

### Colors

All theme colors are defined as CSS custom properties at the top of `css/main.css`:

```css
:root {
  --color-primary: #1e40af;
  --color-secondary: #0ea5b7;
  --color-accent: #f97316;
  --color-bg: #eef3ff;
  --color-text: #0f172a;
  /* … */
}
```

Update these values to match your brand.

### Content

- **Company info** — Edit headings, copy, and structured data directly in `index.html`.
- **Images** — Replace placeholder assets inside `images/hero/`, `images/logos/`, etc.
- **URLs** — Update the `<link rel="canonical">` tag, `sitemap.xml`, and Open Graph URLs to match your production domain.
- **Contact form** — The form currently simulates submission. Connect it to a real backend or service (e.g., Formspree, Netlify Forms, or a custom API) by editing `js/form-handler.js`.

---

## ♿ Accessibility

- Keyboard-navigable menu with Escape-to-close support
- Skip-to-content link for screen readers
- `aria-expanded`, `aria-controls`, `aria-label`, and `aria-live` attributes throughout
- Animations respect the `prefers-reduced-motion` user preference

---

## 🌐 SEO

- Open Graph and Twitter Card meta tags for rich social previews
- JSON-LD structured data for Organization and Service schemas
- Canonical URL, `robots.txt`, and `sitemap.xml` included
- Semantic HTML headings and landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)

---

## 📦 Deployment

The `dist/` folder produced by `npm run build` can be deployed to any static hosting provider:

- **Netlify** — drag-and-drop the `dist/` folder or connect the repo
- **Vercel** — set the output directory to `dist` and build command to `npm run build`
- **GitHub Pages** — serve from the `dist/` folder
- **AWS S3 + CloudFront** — upload `dist/` contents to an S3 bucket

---

## 📝 Notes

- The contact form uses **client-side validation only** with a simulated submission delay. Integrate a real backend before going live.
- Replace all placeholder branding assets in the `images/` directory with your own.
- Update the `canonical` URL, `sitemap.xml` entries, and OG URLs if your production domain differs from `https://www.uxcode.com/`.

---

## 📄 License

© 2026 UXCode. All rights reserved.
