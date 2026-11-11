# Arunav Gawri — Portfolio

Personal portfolio for Arunav Gawri, Software Analyst at Goldman Sachs. The site
covers my background, experience, selected projects, and technical skills, and
links to the latest resume.

## Stack

- React 18
- Vite 6
- Tailwind CSS 3
- React Icons

## Local development

```bash
npm install
npm run dev
```

The dev server runs at the URL printed by Vite (usually `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

`npm run deploy` requires push access to the GitHub repository. The build itself
no longer deploys automatically.

## Content

All profile copy, experience, projects, skills, and social links live in
`src/data/resume.js`. Update that file to keep the site in sync with the resume.

The downloadable resume lives at `public/Arunav_resume.pdf`. Replace that file
when the resume changes — the site links to it from the navbar, hero, about
section, contact section, and footer.

The social share image lives at `public/og-image.png` and is referenced from the
Open Graph and Twitter meta tags in `index.html`.

## Deployment

The Vite `base` is relative (`./`), so the build works on GitHub Pages and
other static hosts. Since this is a single-page portfolio with in-page anchors,
no server-side routing or `404.html` fallback is needed.

For GitHub Pages:

```bash
npm run deploy
```

## Search visibility (SEO)

The canonical site is `https://drstone08.github.io/arunavgawri/`. All metadata,
structured data, `robots.txt`, and `sitemap.xml` point to this URL.

> The Vercel deployment at `arunavgawri.vercel.app` is retired. Delete that
> project in the Vercel dashboard so the old copy stops being served; the site
> no longer references it.

Files involved:

- `index.html`: title, description, robots directives, canonical, Open Graph,
  Twitter card, `rel="me"` links, Person/WebSite JSON-LD, and a `<noscript>`
  summary for crawlers.
- `public/robots.txt`: allows crawling and points to the sitemap.
- `public/sitemap.xml`: homepage and resume URLs.
- `public/og-image.png`: social preview image.

### One-time setup

1. Verify the GitHub Pages property in
   [Google Search Console](https://search.google.com/search-console) using the
   HTML tag method. Add the provided
   `<meta name="google-site-verification" content="..." />` tag to `index.html`,
   rebuild, deploy, and click **Verify**.
2. Submit `https://drstone08.github.io/arunavgawri/sitemap.xml` under
   **Sitemaps**.
3. Use **URL Inspection** on `https://drstone08.github.io/arunavgawri/` and
   request indexing.
4. Repeat verification and sitemap submission in
   [Bing Webmaster Tools](https://www.bing.com/webmasters).
5. Add the portfolio URL to LinkedIn (Contact info → Website), the GitHub
   profile bio/website field, and the Instagram bio. These links help search
   engines associate the name with this site.

After deploying, confirm:

```bash
curl -sI https://drstone08.github.io/arunavgawri/robots.txt
curl -sI https://drstone08.github.io/arunavgawri/sitemap.xml
```

Because this is a GitHub Pages project site, `robots.txt` lives under the
`/arunavgawri/` path; the host root `https://drstone08.github.io/robots.txt` is
controlled by GitHub and is not part of this repository. Nothing blocks
crawling, and the sitemap is submitted directly in Search Console.

Both URLs should return `200`. Indexing usually takes days to a few weeks;
requesting indexing only queues a crawl.
