# FSS Blog Links Landing Page

Static landing page for `FSS星団考察アーカイブ`.

## Local preview

Open `index.html` directly in a browser.

## GitHub Pages

Recommended setup:

1. Create a repository such as `fssblog-links`.
2. Put `index.html`, `styles.css`, and `assets/` at the repository root.
3. Enable GitHub Pages from `main` / root.

If this is published from the existing `project-inventory` repository instead, use GitHub Pages with the `docs/` directory and access `/fssblog-links/`.

## KPI tracking

The page is ready for GA4 tracking through `analytics.js`.

1. Create or reuse a GA4 web data stream for the GitHub Pages URL.
2. Put the GA4 measurement ID in `index.html`:

```html
<meta name="ga4-measurement-id" content="G-XXXXXXXXXX">
```

Tracked KPI events:

- `page_view`: GA4 default page view for LP visits.
- `outbound_click`: click events for blog, TikTok, Instagram, Threads, and the latest article CTA.

All outbound links also include `utm_source=github_pages_lp`, `utm_medium=referral`, and `utm_campaign=fssblog_links` so the destination-side analytics can identify LP traffic.

## Link targets

The blog URL is confirmed:

- `https://fssblog.hatenablog.com/`

The social URLs currently use the `@fssblog` handle assumption and should be adjusted here if the actual handles differ:

- `https://www.tiktok.com/@fssblog`
- `https://www.instagram.com/fssblog/`
- `https://www.threads.net/@fssblog`
