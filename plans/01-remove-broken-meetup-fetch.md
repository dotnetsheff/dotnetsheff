# Remove broken meetup fetching

## Problem

The homepage currently tries to fetch the next meetup from `https://dotnetsheff.co.uk/api/events/next` in `js/main.js`. That API no longer works, so the Knockout view model falls back to generic copy after a failed runtime request. The page also loads Knockout and Moment mostly to support this one feature.

## Goal

Make the homepage reliable without depending on a dead API. The first iteration should remove the runtime next-event fetch and show clear static copy with a direct link to the dotnetsheff Meetup page.

## Proposed changes

- Replace the dynamic `data-bind` homepage hero with static HTML.
- Remove `HomeViewModel`, `EventSummaryViewModel`, and the `events/next` AJAX call from `js/main.js`.
- Remove `moment.min.js` and Knockout from global scripts if the feedback page no longer needs Knockout, or keep Knockout scoped to feedback until that page is addressed.
- Update the call-to-action text to make Meetup the source of truth for upcoming events.
- Consider adding a manual `_data` file later if organisers want to feature an upcoming event without a live API.

## Acceptance criteria

- Loading the homepage makes no request to `/api/events/next`.
- The hero always renders useful event copy without waiting for JavaScript.
- The "Join Us" button goes directly to `https://www.meetup.com/dotnetsheff`.
- No unused JavaScript dependencies remain for the removed behaviour.

## Notes from current code

- Homepage dynamic markup: `index.html`
- Fetching logic: `js/main.js`
- Global script includes: `_includes/scripts.html`
