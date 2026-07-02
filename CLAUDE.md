# Moms for Change

Angular 20 + Tailwind v4 marketing landing page (standalone components, signals, single route). Static site, no backend. Repo: github.com/Sdraugel/momsforchange.

## Deploy: ONE path — Cloudflare Workers Builds (Git-connected)

Hosting is a **static-assets Worker** built by Cloudflare directly from this repo on every push to `main`. Config is `wrangler.jsonc` (Worker name `momsforchange`, assets = `dist/moms-for-change/browser`, `not_found_handling: single-page-application`).

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (non-prod branch: `npx wrangler versions upload`)
- Custom domain `momsforchangesc.org` is bound in the Worker's Settings > Domains & Routes.
- Validate config without uploading: `npm run build && npx wrangler deploy --dry-run`.

DO NOT add a GitHub Actions or Cloudflare **Pages** workflow. An earlier "deploy to Cloudflare Pages" CI (commit eeb703c) was deliberately replaced by Workers Builds (commit 06c7394). Re-adding Pages/Actions creates a second, conflicting deploy path and leaves orphaned Worker/Pages projects. There must be exactly ONE Worker: `momsforchange`.

The root `CNAME` file is a leftover GitHub-Pages convention and is NOT used by this path — ignore it; don't "fix" hosting because of it.

Delete a stray/duplicate Worker with `npx wrangler delete --name <worker>`, or in the Cloudflare dash: Workers & Pages > (the extra worker) > Settings > Delete. Keep only `momsforchange`.

## Node version (Angular CLI drift)

Angular 20's CLI needs Node 22.x. There is no `.nvmrc` here yet; if a Cloudflare build fails with "The Angular CLI requires a minimum Node.js version", add a root `.nvmrc` containing exactly `22.22.3` — Cloudflare Workers Builds reads it automatically (this is how the marketing repo is pinned).

## CDN cache rule (read before debugging a "broken" deploy)

Cloudflare's edge negative-caches 404s with a long TTL. So:

- If a just-deployed change "looks un-deployed," assume **browser/edge cache first** — hard-refresh, or check in a private window, before concluding the deploy failed.
- NEVER request a not-yet-deployed hashed asset (e.g. `https://momsforchangesc.org/main-<hash>.js`) through the domain to "check" a deploy. That caches the 404 at the edge and the finished build then serves broken. If already poisoned, re-request with a cache-buster (`?cb=1`) to replace the cached 404 with a 200.

## Local dev (Windows)

- `npm start` = `ng serve` (http://localhost:4200); `npm run build` = prod build to `dist/moms-for-change`.
- Stop `ng serve` before running `npm install` — Windows throws EPERM if the dev server has files locked.
