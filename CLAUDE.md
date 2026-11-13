# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The website for MLBio, the merged MLCB (Machine Learning in Computational Biology) and MLSB (Machine Learning in Structural Biology) meeting, served at mlsb.io. Always write the name as **MLBio** (not MLBIO). It is a Next.js 15 / React 19 app (App Router, Tailwind v3, shadcn/ui components in `components/ui/`). The README is a leftover from an old theme and not relevant.

## Commands

Package manager is pnpm.

- `pnpm dev`: local dev server
- `pnpm build`: static export into `out/`
- `pnpm lint`: `next lint`

There are no tests. `next.config.mjs` sets `output: 'export'` and **ignores TypeScript and ESLint errors during build**, so a passing build does not mean the code type-checks. Run `npx tsc --noEmit` if you need that check.

## Deployment

A push to `master` triggers `.github/workflows/nextjs.yml`, which builds with pnpm and deploys `out/` to GitHub Pages (`CNAME` → mlsb.io). Because the site is a static export, there's no server-side runtime: no API routes, no dynamic server rendering, and images are unoptimized.

## Structure

- `/` is the MLBio landing page: `app/page.tsx`, built from `components/mlbio/*` (header, hero with the `merge-illustration` SVG, past editions, sign-up for the shared MLBio Google Group mlbio@googlegroups.com, footer). Its look is a hand-made approximation of Tailwind UI's Keynote template, which is paid, so none of its code is in the repo. Fonts are Inter (`font-sans`) and DM Sans (`font-display`), set in `app/layout.tsx` and `tailwind.config.ts`.
- `/2025/*` (`app/2025/`) is the archived MLSB 2025 site. `app/2025/layout.tsx` gives it its own metadata and the Geist font. Its pages use `components/navbar.tsx` and `components/newsletter-section.tsx`, and every internal link in them must be prefixed with `/2025`. The navbar has separate desktop and mobile link lists.
- `app/{schedule,scheduleeu,call-for-papers,accepted-papers,committee,past-editions}/page.tsx` are redirect stubs (`components/legacy-redirect.tsx`) that keep the old shared MLSB 2025 URLs working. Static export can't do server redirects.
- In MLSB 2025, content such as speakers, schedule items and committee members is hardcoded as arrays inside each page component. Edit those arrays to change the content.
- `public/` holds static assets plus the archived **old static MLSB sites** (`index_2020.html` … `index_2024.html`, with `css/`, `js/`, `img/`, `fonts/`, `papers_20XX/`). The past-editions lists link to them. Don't touch them. MLCB archives are external links (Google Sites, PMLR) in `components/mlbio/past-editions.tsx`.

## Accepted papers workflow (2025 edition)

- `data/accepted-papers.json` drives `app/2025/accepted-papers/page.tsx`. Each entry has `id`, `title`, `authors`, `abstract`, `category` (`"Poster"` / `"Contributed talk"`) and `location` (San Diego / Copenhagen, for the NeurIPS and EurIPS venues). Some `location` values have a leading space, so compare them trimmed.
- PDFs live at `public/papers_2025/<id>.pdf`, and the page links to them by `id`.
- `AcceptedPapers.ipynb` (untracked) builds the JSON from a submission-system TSV export (`public/papers_2025.txt`) and moves camera-ready PDFs into `public/papers_2025/`. It writes to `public/accepted-papers.json`, which is not the file the app imports, so copy or merge the output into `data/accepted-papers.json`.
