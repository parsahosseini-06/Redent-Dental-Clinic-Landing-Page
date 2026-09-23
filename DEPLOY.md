# Deployment Guide — Redent Website

Deploy on **Vercel** (or any static host). Node `>=20` is required.

## Local development & preview

```bash
npm install

# Dev server with HMR at http://localhost:5173
npm run dev

# Production build → outputs to dist/
npm run build

# Serve the dist/ build locally (what Vercel will actually serve)
npm run preview
```

## Deploy — Dashboard (recommended)

1. Push the repo to GitHub.
2. On [vercel.com/new](https://vercel.com/new), import the repository.
3. Framework Preset: **Vite** · Build Command: `npm run build` · Output Directory: `dist` — these are also pinned in `vercel.json`, so the defaults just work.
4. Click **Deploy**.
5. Every branch push and PR gets its own **Preview URL** automatically. The `main` branch deploys to **Production**.

## Deploy — CLI

```bash
npm install -D vercel

# Log in and link this folder to a Vercel project (creates .vercel/, git-ignored)
npx vercel login
npx vercel link

# Deploy a branch preview
npm run deploy:preview      # → prints a temporary *.vercel.app preview URL

# Promote to production
npm run deploy:prod         # → production URL
```

## Preview workflow

- `git push` to a feature branch or open a PR → Vercel posts a **Preview URL** on the PR for review.
- Merge to `main` → production deploy with a new immutable release.
- Every deploy is atomic and immutable — roll back from the Vercel dashboard at any time.
- To test the exact production build locally before pushing, run `npm run build && npm run preview` (serves `dist/` with correct asset paths at `http://localhost:4173`).

## Configuration notes

- **`vercel.json`** pins the build command, output directory, and install command, and adds:
  - **SPA rewrite** — unknown routes serve `index.html`, so deep links and refreshes never 404.
  - **Asset caching** — hashed files in `/assets/` are served with `immutable` cache headers for instant repeat loads.
  - **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`.
- **Node version** is pinned via `package.json` → `engines.node` (Vercel respects this).
- The site is a pure static build — **no environment variables are required**.
