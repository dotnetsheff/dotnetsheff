# Refresh content and links

## Problem

Some site content appears dated or may no longer be accurate, including venue details, Slack invite links, copyright text, social links, and old event/video metadata.

## Goal

Make the site accurate for current visitors before or during the framework migration.

## Changes

- Venue is now between Sheffield Hallam University, Sheffield Tech Parks and Goodlord Offices, update footer/FAQ copy.
- Remove the old Slack invite, We now use whats app, be good to create a call to action to message organisers for a link or ask us at the next meetup.
- Update social links - https://x.com/dotnetsheff, http://bsky.app/profile/dotnetsheff.co.uk, https://www.instagram.com/dotnetsheff/, https://www.linkedin.com/company/12071386
- Update copyright text.
- Go fetch the latest dotnetsheff videos from YouTube and update the videos to have the latest from the feed - https://youtube.com/c/dotnetsheff.
- Fix small copy issues in existing content, such as typos in FAQ and homepage text.

## Acceptance criteria

- All primary calls to action point to active destinations.
- Footer, FAQ, and homepage copy match how dotnetsheff currently runs.
- Broken or obsolete links are removed or replaced.
- The videos page only shows playable videos.

## Notes from current code

- FAQ data: `_data/faq.yml`
- Videos data: `_data/videos.yml`
- Sponsors data: `_data/sponsors.yml`
- Footer venue/copyright: `_includes/footer.html`
- Slack section: `index.html`
