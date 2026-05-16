# Wanlipha DeJans — Personal Resume Site

A single-page resume website for Wanlipha DeJans. Static HTML/CSS/JS, no
build step, no dependencies. Drop it on any host and ship it.

## Structure

```
WD Site/
├── index.html                          # All page content
├── styles.css                          # Warm cream / turquoise / coral theme
├── script.js                           # Mobile nav, sticky header, scroll-reveal
├── assets/
│   ├── wanlipha.png                    # Hero portrait
│   └── Wanlipha-DeJans-Resume.pdf      # Downloadable résumé
└── README.md
```

## Updating the résumé PDF

The download buttons (nav, hero, contact section) all point to
`assets/Wanlipha-DeJans-Resume.pdf`. To update, just drop a new file with
the **same filename** into `assets/` — no code changes needed.

## Run locally

No build needed. Just open the file or serve the folder:

```bash
# easiest: open in browser
open index.html

# or run a tiny local server (recommended for fonts/caching)
python3 -m http.server 4173
# then visit http://localhost:4173
```

## Deploy

Drop the folder onto any static host:

- **Netlify** — drag-and-drop the folder at <https://app.netlify.com/drop>
- **Vercel** — `vercel deploy` in this directory
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch
- **Cloudflare Pages** — connect the repo, no build command, output dir `/`

## Editing content

All copy lives in `index.html`. Common edits:

| What                | Where in `index.html`                        |
| ------------------- | -------------------------------------------- |
| Name / tagline      | `.hero__title`, `.hero__lede`                |
| About paragraphs    | `#about .about__body`                        |
| Jobs                | `#experience .timeline` items                |
| Skills cards        | `#skills .skills` cards                      |
| Education           | `#education .edu` cards                      |
| Contact info        | `#contact .contact__list`                    |
| Photo               | Replace `assets/wanlipha.png`                |

### Adding LinkedIn certifications

When you have her cert list, drop a new section between `#education` and
`#contact` — a `.skills` grid works great:

```html
<section id="certifications" class="section">
  <div class="container">
    <div class="section__head reveal">
      <p class="eyebrow">Certifications</p>
      <h2 class="section__title">Recent certifications.</h2>
    </div>
    <div class="skills">
      <article class="skill-card reveal">
        <div class="skill-card__icon" aria-hidden="true">📜</div>
        <h3>Certification Name</h3>
        <p>Issuer · Year</p>
      </article>
      <!-- more cards -->
    </div>
  </div>
</section>
```

Don't forget to add `<li><a href="#certifications">Certs</a></li>` to the
nav in `index.html` too.

## Design notes

- **Type**: Cormorant Garamond (display) + Inter (body) via Google Fonts
- **Palette** (turquoise is her favorite color):
  - Cream `#f7f3ec`
  - Turquoise `#2ca6a4` / deep turquoise `#1f7a78` / soft `#7ec5c3`
  - Coral accent `#e08267`
  - Ink `#1f2421`
- All color tokens live in `:root` at the top of `styles.css` — change one
  variable, reskin the whole site.
- **Motion**: subtle scroll-reveal via `IntersectionObserver`, respects
  `prefers-reduced-motion`
- **A11y**: skip link, focus-visible outlines, ARIA on nav toggle, alt text
  on portrait
- **Print**: a print stylesheet strips chrome so the page also works as a
  one-page printable resume
