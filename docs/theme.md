# Theme development

## Structure

| Path | Purpose |
| --- | --- |
| `astro.config.mjs` | EmDash integration, fonts, database, storage, and public origin |
| `wrangler.jsonc` | Deployment resource placeholders |
| `seed/seed.json` | Collections, menus, taxonomies, and original sample content |
| `src/pages/index.astro` | CMS profile homepage |
| `src/layouts/PersonaBio.astro` | Profile page shell |
| `src/layouts/Content.astro` | Shared content layout |
| `src/components/personabio/` | Profile card, navigation, and link icons |
| `src/styles/` | Layout, tokens, appearance controls, and overrides |
| `src/themes/personabio/` | Local catalog metadata and demo content |

## Content contract

The homepage reads the published `bio_profiles` entry with slug `personabio`. Its fields are `title`, `description`, and optional `avatar`. Menus named `primary` and `social` supply navigation and social links. Posts and pages use Portable Text. Taxonomy names are exactly `category` and `tag`.

Missing optional images are supported. Without a profile entry, the homepage falls back to site settings. Empty archives show an empty state. Comments are disabled in the initial schema; enable them only with a moderation plan.

English is the default locale. Turkish content routes use `/tr/` and can fall back to published English content. Interface labels are handled by `src/utils/i18n.ts`; CMS content translations are edited separately. There is no automatic language redirect.

## Theme catalog

`src/middleware.ts` adds a local Persona Bio entry while retaining core authentication and authorization checks. Local preview stays on the site's origin. This does not publish the theme to the EmDash marketplace or provide runtime theme switching.

## Contribution checks

Run `pnpm typecheck` and `pnpm build`. Check the homepage, post archive, article, search, category, tag, empty states, and optional images on desktop and mobile. Test seed changes using a fresh local database: an initialized database does not automatically reapply the seed.

Use server-rendered content routes and forward content cache hints with `Astro.cache.set()`. Preserve the EmDash head/body integration and the loader in `src/live.config.ts`. Maintain documentation, code comments, and theme descriptions in English.
