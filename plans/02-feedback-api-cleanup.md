# Retire or replace feedback API features

## Problem

The feedback page depends on `https://dotnetsheff-api.azurewebsites.net/api` for available events and feedback submission. If this service is no longer maintained, the page can fail in the same way as the next-meetup integration.

## Goal

Decide whether feedback collection is still needed. If it is not actively used, remove the broken form. If feedback is still useful, replace it with a maintained static-friendly option.

## Remove feedback

- Remove the Feedback page from navigation.
- Remove `feedback.html`, `js/feedback.js`, `css/feedback.css`, `css/starrating.css`, and feedback-specific includes if they become unused.
- Replace any links to feedback with organiser contact details.

## Acceptance criteria

- The site no longer points users at a broken feedback experience.
- No JavaScript calls are made to the old Azure feedback API unless the service is confirmed and documented as maintained.
- Navigation only includes pages that work.

## Notes from current code

- Feedback page: `feedback.html`
- Feedback JavaScript: `js/feedback.js`
- Feedback includes: `_includes/feedback-talks.html`, `_includes/star-rating.html`
