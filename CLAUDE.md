# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A dependency-free static personal portfolio site (Twinky Hung — Product × Data × Technology). No build step, no framework, no package manager dependencies — just `index.html`, `styles.css`, `script.js`, and static assets.

## Commands

- `npm run dev` (or `npm start`) — serves the site at http://localhost:5173 via `python3 -m http.server 5173`. There is no build, lint, or test tooling in this repo.
- Deploy by copying `index.html`, `styles.css`, `script.js`, `assets/`, and `cv/` to any static host.

## Source of truth for content and design

`portfolio-master-spec.md` is the master build specification — it defines the site's narrative structure, positioning ("Product × Data × Technology"), section-by-section content, and interaction intent. Read it before making content or structural changes; do not redesign sections, add generic portfolio patterns, or introduce new sections without a clear reason grounded in that spec.

## Architecture

- **Single page, single file per concern.** All markup lives in `index.html`, all styling in `styles.css`, all behavior in `script.js`. There are no templates, components, or bundling — sections are plain `<section>` elements identified by `data-scene` attributes (`hero`, `about`, `experience`, `moodwalk`, `peraflash`).
- **`data-scene` boundaries mark where future scroll-driven/narrative animations will attach.** Per the README, elements within each scene (e.g. Hero forms vs. About disciplines, MoodWalk's initial vs. reframed question, PeraFlash's conversation vs. flashcard screenshots) are kept as separate DOM elements — readable in their static state today — specifically so a later interaction layer can animate the transition between them without restructuring markup first.
- **`styles.css` is written as append-only revision layers, not a single normalized stylesheet.** The file starts with one dense base ruleset plus its responsive media queries (lines 1–10), then has later comment-delimited blocks (e.g. "Full-width sticky navigation and refined Hero hierarchy", "Editorial refinement scoped to navigation typography and the Hero", "Original Hero artwork restored...") that re-declare and override selectors from earlier in the file via CSS cascade order. When changing styles for a selector that appears in multiple blocks, the last matching block wins — check further down the file for a later override before editing an earlier declaration, and prefer adding a new dated/labeled comment block for a distinct change rather than editing historical blocks in place.
- **`script.js`** handles only: mobile nav toggle (with Escape-to-close and focus return), the About "discipline" cards' click/hover pressed-state toggle, and a `ResizeObserver`/`IntersectionObserver` pair that toggles `.is-past-hero` on the header once the hero section scrolls past the sticky nav. No other JS-driven interactivity exists yet (see `data-scene` note above for what's planned).
- **Assets**: `assets/` holds production images referenced by `index.html` (hero SVG, MoodWalk/PeraFlash screenshots, including pre-compressed `-small` JPEG variants used in `srcset`). `moodwalk/`, `peraflash/`, and `references/` at the repo root hold raw/handoff screenshots not directly referenced by the page — treat them as source material, not build inputs. `cv/` contains the downloadable CV PDF linked from the site.
- Case-study links for MoodWalk/PeraFlash are intentionally omitted from `index.html`; live URLs and repos exist in `links.md` but are not yet wired into the page.
