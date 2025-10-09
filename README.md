# Kanopy Website (Vite + React + Tailwind)

This scaffold contains a minimal Vite + React + Tailwind project with modular components for the Kanopy homepage. It includes:

- `src/components` with Hero, Benefits, Platform, ForCompanies, ForEmployees, Solutions, About, Pricing, and ContactFooter.
- Tailwind CSS configured in `tailwind.config.cjs`.

How to run locally (macOS / zsh):

```bash
# install deps
npm install
# start dev server
npm run dev
```

Routes available:
- `/` — Home
- `/platform` — Platform details
- `/solutions` — Solutions overview
- `/about` — About Kanopy
- `/resources` — Blog / FAQs / Resources

Design notes:
- Theme gradient: #4A90E2 -> #7ED6A7
- Fonts: Be Vietnam Pro / Poppins (loaded via Google Fonts in `index.html`)
- Main CTA: "Start Free Trial" (present in top-right and hero)

Next steps:
- Install dependencies and run dev server.
- Replace illustration placeholders with real assets.
- Add analytics and routing as needed.
