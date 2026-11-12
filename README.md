# Varsity Gigs website

A three-page static site for Varsity Gigs, an early-stage pilot student work platform in South Africa. Plain HTML, CSS and JavaScript with no build step.

## Pages

- `index.html` — Home
- `gigs.html` — Browse gigs, with category filters
- `organisers.html` — For organisers

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Common edits

- **Gigs and categories**: edit the `GIGS` and `CATEGORIES` arrays at the top of `js/gigs.js`. The listings are currently examples and are labelled as such on the page.
- **Sign-up link**: every sign-up button points to `https://tally.so/r/q54a08`. To change it, search and replace that URL across the three HTML files and `js/gigs.js`.
- **Colours and fonts**: the variables at the top of `css/styles.css`.
- **Logo**: `assets/logo-full.webp` is the supplied logo. `assets/logo-mark.svg` is a redrawn version of the cap-and-V mark used in the header and footer, and `assets/favicon.png` is cropped from the supplied logo. If you have official SVG or transparent PNG files, replace these and keep the same file names.

## Deploying

The site can be hosted as-is on any static host (GitHub Pages, Netlify, Cloudflare Pages).
