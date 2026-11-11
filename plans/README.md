# Website improvement plans

This folder collects small, iterable plans for improving the dotnetsheff website. The plans are ordered so the broken or risky pieces can be removed first, then the site can be modernised without needing one large rewrite.

## Suggested order

1. [Remove broken meetup fetching](01-remove-broken-meetup-fetch.md)
2. [Retire or replace feedback API features](02-feedback-api-cleanup.md)
3. [Move to a static Next.js site](03-static-nextjs-migration.md)
4. [Refresh content and links](04-content-and-links-refresh.md)
5. [Modernise frontend assets and accessibility](05-frontend-accessibility-and-performance.md)

## Decision log

- Keep the site static by default. Any future dynamic behaviour should either be build-time generated or backed by a maintained service.
- Treat the Meetup page as the source of truth for future events unless there is a deliberate replacement.
- Keep each improvement shippable independently so the current site can be cleaned up before a framework migration.
