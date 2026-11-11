# Move to a static Next.js site

## Problem

The current site is a Jekyll site with older frontend dependencies, global scripts, Bootstrap-era markup, and build infrastructure that may not match the current hosting workflow. Moving to a static Next.js site would make the project easier to maintain with a modern JavaScript toolchain while preserving static hosting.

## Goal

Rebuild the site as a static Next.js app with no required runtime server. The migration should preserve current content and URLs where practical.

## Proposed approach

1. Inventory current pages, data files, images, and includes.
2. Create a Next.js app using static export.
3. Move `_data` content into typed data modules or JSON/YAML loaded at build time.
4. Rebuild layouts as React components: layout, header, footer, hero, sponsors, FAQ list, video grid, and social links.
5. Preserve existing public routes such as `/`, `/pages/faq/`, `/pages/videos/`, and any route that is currently linked externally.
6. Replace global jQuery behaviour with small React/CSS interactions only where still needed.
7. Configure deployment to publish the static output.

## Migration decisions to make

- Whether to keep legacy `/pages/.../` URLs exactly, or add redirects from old URLs to cleaner routes.
- Whether videos should remain manually curated data or be regenerated from YouTube/Meetup metadata.
- Whether the design should be preserved first, then refreshed, or redesigned during the migration.

## Acceptance criteria

- The generated site is fully static.
- Current primary pages are available and render without client-side data fetching.
- Existing images and curated videos are preserved.
- The build command is documented in `README.md`.
- CI or hosting deployment is updated for the new build output.

## Risks

- Route changes could break existing links if redirects are not configured.
- Rewriting design and framework at the same time could make the migration harder to review.
- Some legacy scripts may hide behaviours that need to be intentionally dropped or replaced.
