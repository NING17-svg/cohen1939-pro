# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the launch-day URL inventory for `cohen1939.pro`. The launch locale is `en-US`. The page id / slug pair is the source of truth; the final URL is generated through the route manifest.

| URL | File | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Home | cohen 1939 | Confirm identity, launch window, Steam AppID, Windows-only scope | Release Date / Steam / Gameplay | Launch hub | Cluster entry to all five topic clusters. |
| `/about` | `src/data/pages/fixed-pages.ts` (id `about`) | Wiki | cohen 1939 | Identify the title, developer, publisher, genre | Release / Story / Gameplay / Characters | Identity & Launch hub | Source: Steam store AppID 3582120. |
| `/release` | `src/data/pages/fixed-pages.ts` (id `fixed-release-status-en-US`) | Release | cohen 1939 release date | Confirm Sep 29, 2026 launch and offer window | Steam / Platforms / Price | Identity & Launch | Introductory offer ends Oct 13, 2026. |
| `/steam` | `src/data/pages/fixed-pages.ts` (id `fixed-steam-availability-en-US`) | Release | cohen 1939 steam | Confirm Steam AppID 3582120 | System / Release / Platforms | Identity & Launch | Steam-only launch scope. |
| `/platforms` | `src/data/pages/fixed-pages.ts` (id `fixed-platforms-en-US`) | Release | cohen 1939 platforms | Confirm Windows-only launch and what is not announced | Steam / Release / System | Identity & Launch | macOS / Linux / console / co-op not announced. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` (id `fixed-system-requirements-en-US`) | Wiki | cohen 1939 system requirements | Minimum PC spec table | Steam / Platforms | Tech & Store | Recommended spec and download size not announced. |
| `/languages` | `src/data/pages/fixed-pages.ts` (id `fixed-languages-en-US`) | Wiki | cohen 1939 languages | UI / subtitle / audio language list | Overview / Platforms | Languages | English audio only; four UI languages. |
| `/story` | `src/data/pages/fixed-pages.ts` (id `fixed-story-en-US`) | Wiki | cohen 1939 story | 1939 Birmingham setting and Elisa revenge arc | Overview / Characters / Gameplay | Story & Characters | Deeper plot beats not announced. |
| `/characters` | `src/data/pages/fixed-pages.ts` (id `fixed-characters-en-US`) | Wiki | cohen 1939 characters | Four playable characters with unique abilities | Story / Gameplay | Story & Characters | Per-character movesets not announced. |
| `/gameplay` | `src/data/pages/fixed-pages.ts` (id `fixed-gameplay-en-US`) | Guide | cohen 1939 gameplay | Top-down twin-stick combat loop | Characters / Story / Trailer | Gameplay & Media | Per-weapon stat lines not announced. |
| `/trailer` | `src/data/pages/fixed-pages.ts` (id `fixed-trailer-en-US`) | Wiki | cohen 1939 trailer | Official Steam store trailer | Overview / Gameplay | Gameplay & Media | Link-only embed; no third-party iframe. |
| `/achievements` | `src/data/pages/fixed-pages.ts` (id `fixed-achievements-en-US`) | Wiki | cohen 1939 achievements | Steam achievements and services | Steam / Overview | Tech & Store | Achievement count and names not announced. |
| `/price` | `src/data/pages/fixed-pages.ts` (id `fixed-price-en-US`) | Release | cohen 1939 price | $13.49 introductory, $14.99 base | Release / Steam | Tech & Store | Introductory window ends Oct 13, 2026. |
| `/guides` | `src/data/pages/fixtures.ts` (id `guides`) | Guide | cohen 1939 guides | Launch-day reference index | Gameplay / Characters | Hub | Index-style navigation; not in content package. |
| `/wiki` | `src/data/pages/fixtures.ts` (id `wiki`) | Wiki | cohen 1939 wiki | Identity / release / Steam / platforms index | Overview / Release | Hub | Index-style navigation; not in content package. |
| `/faq` | `src/data/pages/fixtures.ts` (id `faq`) | FAQ | cohen 1939 faq | Common launch questions | Release / Steam | Answer hub | FAQ schema enabled. |
| `/contact` | `src/data/pages/site-pages.ts` (id `contact`) | Utility | contact cohen 1939 | Corrections and source updates | About | Trust | No direct contact channel. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` (id `privacy-policy`) | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` (id `terms`) | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Unofficial disclaimer. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`. Site Plan declares `entity_families: []`, so no entity routes are emitted for the launch build.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Identity & Launch: `/about`, `/release`, `/steam`, `/platforms`
- Story & Characters: `/story`, `/characters`
- Gameplay & Media: `/gameplay`, `/trailer`
- Tech & Store: `/system-requirements`, `/achievements`, `/price`
- Languages: `/languages`

## Internal Linking Map

- `/about` -> `/release`, `/steam`, `/platforms`, `/story`, `/gameplay`, `/characters`
- `/release` -> `/steam`, `/platforms`, `/price`
- `/steam` -> `/system-requirements`, `/release`, `/platforms`
- `/platforms` -> `/steam`, `/release`, `/system-requirements`
- `/system-requirements` -> `/steam`, `/platforms`
- `/languages` -> `/about`, `/platforms`
- `/story` -> `/about`, `/characters`, `/gameplay`
- `/characters` -> `/story`, `/gameplay`
- `/gameplay` -> `/characters`, `/story`, `/trailer`
- `/achievements` -> `/steam`, `/about`
- `/price` -> `/release`, `/steam`
- `/trailer` -> `/about`, `/gameplay`
