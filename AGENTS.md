# AGENTS.md — jsong.ca portfolio

Astro 7 + Tailwind CSS v4 + TypeScript (strict) personal portfolio with typed, config-driven content
and a CSS-first token architecture. The project began as the 8-BitQuest template and is being
incrementally redesigned as **jsong.ca**. Single-language. Package manager: **pnpm**.

## Product purpose

- This is Jin Song's professional software-engineering portfolio, primarily intended for job
  searching, recruiter review, hiring-manager review, and technical peer review.
- Preserve the memorable retro pixel identity of 8-BitQuest, but prioritize professionalism,
  readability, credibility, accessibility, and clear information hierarchy.
- The design concept is **Paper Pixel**: a restrained retro-computing interface printed on warm
  paper rather than a dark neon game dashboard.
- The target primary navigation is: **Home · Projects · Experience · Notes · About**.
- The target homepage structure is:
  1. Hero — name, role, focus, location, introduction, Projects CTA, Resume CTA
  2. Player Profile / System Info — role, focus, location, status
  3. Project Log
  4. Professional Experience
  5. Recent Notes
  6. Footer — GitHub, LinkedIn, email
- The repository may temporarily differ from this target while the redesign is being implemented.
  Make changes incrementally; do not treat transitional routes or demo copy as the final design.

## Paper Pixel design direction

- Primary surfaces: warm cream, off-white, pale beige, and related paper tones.
- Primary ink and borders: dark forest green, olive, and charcoal-green.
- Accent colors are limited and muted: dusty blue, sage green, and muted brick red.
- A subtle paper texture is welcome, but it must not reduce text contrast, introduce distracting
  noise, or require a heavy runtime dependency.
- Preserve pixel styling selectively in headings, icons, badges, status UI, dividers, panels,
  borders, and small decorative details.
- Body text and long-form prose prioritize reading comfort and do not need a pixel or monospaced
  font. Reserve the pixel display face for short text at deliberate hierarchy points.
- Avoid pervasive uppercase text, oversized hard shadows, excessive four-pixel borders, neon
  accents, cyberpunk styling, and indie-game-studio language.
- Retro terminology may be used sparingly—such as "Project Log" or "System Info"—but professional
  meaning must remain immediately clear.
- Prefer calm hierarchy and whitespace over decorative density. The site should be suitable for
  inclusion on a software-engineering résumé.
- Keep both light and dark themes coherent while both are supported. Do not remove dark-mode
  behavior or change the theme bootstrap policy without an explicit design decision.

## Content integrity

- Never invent personal information, employers, job titles, dates, education, certifications,
  project outcomes, technologies, metrics, testimonials, social URLs, email addresses, or résumé
  URLs.
- When real content has not been provided, use clearly identifiable placeholder content that cannot
  be mistaken for a verified claim about Jin.
- Do not silently present the template's demo content as Jin's work or experience.
- Keep facts in one authoritative source:
  - Projects and technical notes belong in Astro content collections.
  - Identity, navigation, social links, and facts shared across pages belong in typed config.
  - Experience shown on both Home and Experience must come from one typed config or collection,
    rather than duplicated component literals.
  - Truly one-off presentational copy may remain as a typed literal in its Section component.
- Use **Notes** in public-facing navigation and copy. If the existing `blog` collection or `/blog/`
  routes are retained internally during migration, keep that distinction deliberate and consistent.

## Redesign implementation principles

- Preserve the existing Astro architecture where practical. Prefer adapting route shells, Sections,
  Cards, UI primitives, config, and collections over replacing them.
- Make design changes token-first: update semantic variables, palette ramps, typography tokens,
  shadows, and reusable primitives before adding repeated component-level overrides.
- Reuse `PixelPanel`, shared card shells, badges, the icon registries, navigation primitives,
  responsive grids, SEO helpers, and content-query helpers where their contracts still fit.
- Modify component APIs carefully and update all consumers together. Read the relevant component
  contract README before changing a Section, Card, or UI primitive.
- Make small, reviewable phases. Avoid whole-site rewrites or mixing content replacement, route
  migration, and a complete visual redesign into one change.
- Do not remove useful behavior—SEO, RSS, structured data, view transitions, theme handling,
  accessibility, responsive behavior, contact handling, or reduced-motion support—without a clear
  reason.
- Default to zero-JavaScript Astro output. Add client behavior only when the interaction genuinely
  requires it.
- Do not add a styling, texture, icon, motion, or component dependency when the existing token,
  CSS, or component systems can handle the requirement cleanly.

## Responsive and accessibility requirements

- Design mobile-first. Mobile should be a clean single-column layout with readable body text,
  comfortable line lengths, generous touch targets, and vertically stacked cards and actions.
- Desktop may use a denser retro dashboard composition, but content order and reading flow must
  remain clear without relying on visual position alone.
- Preserve semantic headings, landmarks, lists, definition lists, link purpose, and logical keyboard
  order.
- Maintain visible focus states and keyboard operation for all interactive controls.
- Meet WCAG AA contrast for normal text and controls. Paper texture and muted colors do not override
  this requirement.
- Respect `prefers-reduced-motion`. Decorative motion must remain optional and must not be required
  to discover or understand content.
- Prevent wide pixel headings, metadata rows, code blocks, tables, or status panels from causing
  horizontal overflow on narrow screens.

## Commands

| Command        | Action                                    |
| :------------- | :---------------------------------------- |
| `pnpm install` | Install dependencies                      |
| `pnpm dev`     | Dev server at `localhost:4321`            |
| `pnpm build`   | Production build to `dist/`               |
| `pnpm preview` | `wrangler dev` — the built Worker locally |
| `pnpm deploy`  | `astro build && wrangler deploy`          |
| `pnpm lint`    | ESLint                                    |
| `pnpm format`  | `eslint --fix` then Prettier              |
| `pnpm check`   | `astro check` (type `.astro`/`.ts`)       |
| `pnpm test`    | Every `*.test.ts` self-check under `src/` |

## Project structure

```
src/
├── components/
│   ├── Sections/<Page>/<Name>.astro  # layout-free page sections; Global/ for cross-page ones
│   ├── Cards/<Name>Card.astro        # composed, content-aware cards (on ui/pixel-panel)
│   ├── ui/<name>/<Name>.astro        # UI primitives (contract: ui/README.md)
│   └── svg/
│       ├── icons/                    # general icon registry
│       └── pixel-icons/              # pixel-art icon registry
├── config/
│   ├── siteData.json.ts             # site identity, author, OG default, sameAs URLs
│   ├── navData.json.ts              # primary navigation
│   ├── portfolioData.json.ts        # shared portfolio/profile facts
│   ├── socialData.json.ts           # typed social-platform resolution
│   ├── legalData.json.ts            # terms + privacy content
│   ├── siteSettings.json.ts         # siteLang/siteLocale + feature flags
│   └── types/configDataTypes.ts     # interfaces for config files
├── data/
│   ├── projects/<slug>/index.mdx    # project entries
│   ├── blog/<slug>/index.mdx        # technical posts; target public name is Notes
│   └── authors/<name>.md            # author records
├── js/                              # content queries, card mappings, SEO/schema, RSS, utilities
├── layouts/                         # BaseHead (SEO/meta), BaseLayout (global shell)
├── pages/                           # thin route shells: own BaseLayout + SEO, compose Sections
└── styles/                          # tokens, global entry, fonts, and owned motion catalog
```

- **Sections vs Cards vs ui**: pages are thin route shells that own `BaseLayout` + SEO and compose
  **Sections** (layout-free content blocks, per-page or `Global/`); Sections build on **ui** primitives
  and **Cards** (content-aware compositions). Contracts: `src/components/Sections/README.md`,
  `src/components/Cards/README.md`, `src/components/ui/README.md`.
- `src/content.config.ts` — content collection schemas (Zod). Entries live directly under the
  collection dir (id `<slug>`).
- `src/config/` — typed site config. Content is three deliberate tiers: collections (`src/data/`,
  Zod-validated), config (`src/config/` — anything used on more than one page: brand, nav, legal,
  portfolio facts), and one-off section copy as a typed literal at the top of its Section component
  (the FAQ, tech list, gear table — edit the section to edit the copy). New cross-page values go in
  config, never as literals in components.
- Path aliases (`@config/* @js/* @layouts/* @components/* @assets/* @images/* @/*`) come from
  `tsconfig.json` `paths` — prefer them over deep relative imports.

## Stack defaults

- **TypeScript** strict; validate external data at the boundary (Zod).
- **Tailwind v4** CSS-first: tokens in `@theme`; use token utilities (`bg-primary`, `text-foreground`,
  `text-base-700`), never raw palette colors (`bg-violet-700`) — that bypasses theming + dark mode.
- **Astro 7** Rust compiler: close every tag, mind JSX whitespace (`{" "}`), default to zero-JS islands.

## Don't / gotchas

- **Set `SITE_URL` in the build environment** before a production deploy — `astro.config.mjs` falls
  back to the `https://example.com` placeholder, which feeds the sitemap and the canonical/OG URLs in
  `BaseHead.astro`. A production build (`DEPLOY_ENV=production`) throws on the placeholder.
- **Hosting is Cloudflare Workers** (`@astrojs/cloudflare` + `wrangler.jsonc`). The wrangler `main`
  must stay `@astrojs/cloudflare/entrypoints/server` — never a `dist/` path (it breaks `astro
check`). Server secrets (the Resend keys) go through the `astro:env` schema in `astro.config.mjs`,
  NOT `import.meta.env` — Workers runtime secrets never reach `import.meta.env`. Set them with
  `pnpm wrangler secret put <NAME>`; local dev reads `.env` as usual.
- **`vite.build.assetsInlineLimit: 0`** is intentional — inlined short scripts break under
  `<ClientRouter />` view transitions. Leave it at 0.
- **Theme is set pre-paint** by an inline script in `BaseHead` (follows the device
  `prefers-color-scheme`) — don't move it to a bundled `<script>` or you'll reintroduce a flash of the
  wrong theme.
- **Token discipline:** in markup use `bg-primary` / `text-foreground` / `text-base-700`, never raw
  `bg-violet-700` / `text-zinc-300` (bypasses theming + dark mode). See `tailwind-theme.css`.
- **Motion is owned, not vendored.** The `animate-*` catalog is `src/styles/motion/` — don't `pnpm add`
  an animation library. `prefers-reduced-motion` is handled by a global guard there; scroll-driven
  (`timeline-*`) elements still need `motion-reduce:animate-none`, and decorative motion is gated on
  `siteSettings.useAnimations`.
- **SEO is owned, not vendored.** `BaseHead` emits every meta/OG tag natively; structured data comes
  from the JSON-LD builders in `@js/schema`; `robots.txt`/`llms.txt` are dynamic endpoints. Don't
  `pnpm add` an SEO/robots/schema package.
- `.claude/memory.db` and `.claude/settings.local.json` are local state — gitignored, not artifacts.
- **Two deps are held a major behind — don't `pnpm update --latest` blindly.**
  - `typescript` stays on 6.x. TS 7 is blocked by two hard peer ranges: `@astrojs/check` (which is
    `pnpm check`) peers `typescript: ^5.0.0 || ^6.0.0`, and `typescript-eslint` (which is `pnpm lint`)
    peers `typescript: >=4.8.4 <6.1.0`. Upgrading breaks both commands until both release TS 7 support.
  - `eslint-plugin-astro` stays on 2.1.1. This one is **not** blocked — 3.0.1 declares the same peers
    and engines as 2.1.1 — it is simply untrialled, and a major on the plugin whose
    `configs.recommended` / `configs["jsx-a11y-recommended"]` this repo spreads into
    `eslint.config.mjs` can change that config surface. Upgrade deliberately and re-run `pnpm lint`,
    not as part of a sweep.
- **The content layer caches deleted entries.** `node_modules/.astro/data-store.json` survives
  `rm -rf .astro`, so removing a collection entry and rebuilding fails with
  `UnknownContentCollectionError` naming the file you just deleted. Clear both:
  `rm -rf node_modules/.astro .astro dist`. See `src/data/README.md`.
- **`/contact/` being on-demand duplicates the stylesheet.** The build emits `BaseLayout.<hash>.css`
  and a byte-identical `contact.<hash>.css`. It is an adapter artifact of mixing prerendered and
  on-demand routes (prerendering the route collapses them — verified), not something to fix in config.

## Verification

After non-trivial changes run the full chain:

```sh
pnpm lint && pnpm check && pnpm build && pnpm test
```

Schema and config mistakes surface at build time, so a clean build is the real check. `pnpm test`
discovers and runs every `*.test.ts` under `src/` with Node's type stripping (no framework, no
fixtures) and **fails when it finds none** — name a check `<thing>.test.ts` next to the code it covers
and it runs.
