# Varsity Gigs website

A four-page static site for Varsity Gigs, an early-stage pilot student work platform in South Africa. Plain HTML, CSS and JavaScript with no build step.

## Pages

- `index.html` — Home
- `about.html` — About
- `gigs.html` — Browse gigs, with category filters
- `organisers.html` — For organisers

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Common edits

- **Gigs and categories**: edit the `GIGS` and `CATEGORIES` arrays at the top of `js/gigs.js`. The listings are currently examples and are labelled as such on the page.
- **Sign-up link**: every sign-up button points to `https://tally.so/r/q54a08`. To change it, search and replace that URL across the HTML files and `js/gigs.js`.
- **Colours and fonts**: the variables at the top of `css/styles.css`.
- **Logo**: `assets/logo-full.webp` is the supplied logo, used unaltered in the hero, header and footer. `assets/favicon.png` is the same image scaled down. The official files named in `ABOUT.md` (`Varsity_Gigs_Education_Logo.png`, `primary_horizontal_logo.png`) are not in the repo yet; add them to `assets/` and update the `<img>` tags to use them.
- **Copy and claims**: `ABOUT.md` is the source of truth. Placeholders awaiting the founder are marked with `PLACEHOLDER` comments in the HTML.

## Deploying

The site can be hosted as-is on any static host (GitHub Pages, Netlify, Cloudflare Pages).
