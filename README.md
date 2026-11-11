# dotnetsheff

Public DotNetSheff website.

[https://dotnetsheff.co.uk](https://dotnetsheff.co.uk)

## Development

This is a static Next.js site.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is exported to `dist/`. The build updates `data/youtube-videos.json` with the
latest top 10 videos from the DotNetSheff YouTube feed and falls back to the committed cache if
YouTube is unavailable.

## Deployment

The site is hosted on **GitHub Pages** and deployed by GitHub Actions:

- `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages on every push to
  `master` (and on manual dispatch). The custom domain `dotnetsheff.co.uk` is served via the
  `public/CNAME` file.
- `.github/workflows/refresh-videos.yml` runs once a month, refreshes
  `data/youtube-videos.json` from the YouTube feed and commits any changes, which triggers a
  redeploy.

> One-time repository setup: in **Settings → Pages**, set the source to **GitHub Actions** and
> the custom domain to `dotnetsheff.co.uk`, and point the domain's DNS at GitHub Pages.
