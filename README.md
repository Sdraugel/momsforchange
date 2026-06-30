# Moms for Change

Marketing landing page for **Moms for Change**, a Berkeley County, South Carolina parent-led
group advocating for transparency, fairness, and accountability in local schools.

## Stack

- **Angular 20** standalone components, signals, single route
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- Self-hosted fonts (Fontsource): Bricolage Grotesque (headings), Hanken Grotesk (body),
  Kaushan Script (brand wordmark and small accents only)
- **Phosphor** icons
- Scroll motion via `IntersectionObserver` plus CSS transitions, fully disabled under
  `prefers-reduced-motion`. No `window` scroll listeners.

## Develop

```bash
npm install
npm start      # ng serve -> http://localhost:4200
npm run build  # production build to dist/moms-for-change
```

## Deploy (Cloudflare Workers Builds, Git-connected)

Hosting is a static-assets Worker, built by Cloudflare directly from this repo. The
config lives in `wrangler.jsonc`, which points at the build output
(`dist/moms-for-change/browser`).

In the Cloudflare dashboard (Workers & Pages, Create, connect this GitHub repo) the
project settings are:

- **Project name:** `momsforchange` (must match `name` in `wrangler.jsonc`)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Non-production branch deploy command:** `npx wrangler versions upload`
- **Path:** `/`

Cloudflare installs dependencies, runs the build, then `npx wrangler deploy` uploads the
assets. No GitHub secrets are needed; Cloudflare manages its own token. Every push to
`main` redeploys.

Validate the config locally any time without uploading:

```bash
npm run build
npx wrangler deploy --dry-run
```

Custom domain (`momsforchangesc.org`) is set in the Worker, Settings, Domains & Routes.
The root `CNAME` file is a GitHub Pages convention and is not used by this path.

## Design system

- One accent **hue**: emerald, sampled exactly from the logo (`#05B66C`). Darker steps
  (`emerald-700`, `emerald-900`) and a light `mint` exist only so text meets WCAG AA contrast.
- Light theme, warm off-white base (`#F7F5EE`), deep forest-green ink (`#0E3B22`).
- Soft, organic corner radii throughout (pills, `1.75rem` cards, `0.9rem` chips).

## Images

Real provided assets are used for the logo and founders. The two co-founder headshots live in
`src/assets/img/`. See the note in `src/app/sections/team.component.ts`: the brief did not say
which headshot is Sarah Kalil vs. Yuliana Alcon, so the mapping there is a placeholder. Swap the
two `img` values if reversed. One supporting Picsum-seed photo is used (duotoned in brand
emerald) as a texture in the "What we stand for" section.

Original source assets provided by the org are kept at the repo root.
