# Modernise frontend assets and accessibility

## Problem

The current frontend uses older global dependencies including jQuery, Bootstrap JavaScript, Modernizr, Waypoints, Flexslider, Magnific Popup, Knockout, Moment, and external CSS/fonts. Some images lack explicit dimensions or descriptive alt text, and several interactions rely on JavaScript that may not be needed anymore.

## Goal

Improve page speed, accessibility, and maintainability while keeping the site simple.

## Proposed changes

- Remove JavaScript libraries that are no longer needed after dynamic API features are removed.
- Replace JavaScript-only animations with CSS-only effects or remove them.
- Ensure navigation works without JavaScript.
- Add descriptive `alt` text for meaningful images and empty `alt` text for decorative images.
- Add image dimensions or use framework image optimisation after the Next.js migration.
- Improve page metadata, Open Graph tags, and canonical URLs.
- Check colour contrast for buttons, hero overlays, and footer text.
- Replace protocol-relative URLs with explicit `https://` URLs.

## Acceptance criteria

- The site remains usable with JavaScript disabled for core content and navigation.
- Lighthouse/accessibility issues are reviewed and high-impact fixes are addressed.
- Unused scripts and styles are removed.
- Metadata renders valid values for title, description, Open Graph, and Twitter cards.

## Notes from current code

- Global scripts: `_includes/scripts.html`
- Head metadata: `_includes/head.html`
- Main JavaScript: `js/main.js`
- Main stylesheet source: `css/main.scss` and `_sass/`
