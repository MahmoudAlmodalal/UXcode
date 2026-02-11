# UXCode Landing Page

Production-ready static landing page for UXCode, built from the February 2026 SOP.

## Stack
- HTML5
- CSS3 (`main.css`, `responsive.css`, `animations.css`)
- Vanilla JavaScript (`main.js`, `animations.js`, `form-handler.js`)

## Local Preview
From the project root:

```bash
npm run dev
```

Then open `http://localhost:8080`.

## Build
Create a production-ready static output in `dist/`:

```bash
npm run build
```

Preview the built files:

```bash
npm run preview
```

## Structure
```
uxcode-landing/
├── index.html
├── privacy.html
├── terms.html
├── robots.txt
├── sitemap.xml
├── css/
│   ├── main.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── form-handler.js
│   └── animations.js
├── images/
│   ├── hero/
│   ├── services/
│   ├── icons/
│   └── logos/
└── fonts/
```

## Notes
- Contact form currently uses client-side validation and simulated submission.
- Replace placeholder branding assets in `images/`.
- Update canonical and sitemap URLs if the final domain differs.
