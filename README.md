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

## Deploy (GitHub Actions to Cloudflare Pages)

`.github/workflows/deploy.yml` builds on every push to `main` and uploads the static
output (`dist/moms-for-change/browser`) to Cloudflare Pages via Wrangler.

One-time setup:

1. **Create the Pages project** (Cloudflare dashboard, Workers & Pages, Create, Pages,
   Direct Upload) named `momsforchange`. Or once via CLI:
   ```bash
   npx wrangler pages project create momsforchange --production-branch=main
   ```
   If you pick a different name, update `--project-name` in the workflow.
2. **Add two GitHub repo secrets** (Settings, Secrets and variables, Actions):
   - `CLOUDFLARE_API_TOKEN` - a token with the "Cloudflare Pages: Edit" permission.
   - `CLOUDFLARE_ACCOUNT_ID` - found on the Cloudflare dashboard sidebar.

After that, every push to `main` builds and deploys automatically. Trigger manually from
the Actions tab (Run workflow) any time.

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
