# GROWTH_LOG.md

Chronological record of growth-relevant changes for the `cohen1939.pro` launch hub.

## 2026-09-30

- One-click builder committed the V3 baseline (`b64b441`) and the launch-day content assembly for the Cohen 1939 launch reference hub.
- Implemented the launch-day reference pages from the V3 content package: `/about`, `/release`, `/steam`, `/platforms`, `/system-requirements`, `/languages`, `/story`, `/characters`, `/gameplay`, `/trailer`, `/achievements`, `/price`, plus trust pages `/contact`, `/privacy-policy`, `/terms` and shared index hubs `/guides`, `/wiki`, `/faq`.
- Applied the V3 theme spec: raincoat noir + tungsten amber surface tokens, Playfair Display heading family, gradient background with low-intensity line motif, split-panel home, card-grid hub, reading-right-rail content, and accent tokens wired into the shared theme module.
- Verified the local chain: `npm run typecheck`, `npm run validate:template`, `npm run validate:content`, `npm run validate:indexnow`, `npm run validate:rendered-seo`, and `npm run build`. Generated `public/indexnow-*.txt` and `route-manifest.json`. The V3 route contract validator passed against the site plan, content package, theme spec, and route manifest.

## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-08` / Worker `moggedlooksmaxxordie-wiki`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
