# Satay G website

Static website for Satay G, deployed with **GitHub Pages**.

## Pages

- `/` home page
- `/satay-sauce/`
- `/lemongrass-marinade/`
- `/our-story/`
- `/where-to-buy/`
- `/recipes/`

## Included

- Local product, brand and lifestyle images
- Circular rotating header logo and browser favicon
- Organisation and product structured data
- Canonical metadata, Open Graph metadata, sitemap and robots file
- Redirects from legacy Wix product and store URLs
- Official social profile links
- Security headers (CSP, referrer policy, nosniff) on all main pages
- Custom 404 page

## Host on GitHub Pages

The site files live in the `satay-g-website/` folder. A GitHub Actions workflow deploys that folder to Pages on every push to `main`.

### One-time setup

1. Push this repository to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. After the first workflow run completes, the site will be available at `https://<org>.github.io/satay-g-website/` until a custom domain is configured.

### Custom domain (`www.satayg.com`)

A `CNAME` file is included with `www.satayg.com`.

1. In **Settings → Pages → Custom domain**, enter `www.satayg.com` and save.
2. Enable **Enforce HTTPS** once DNS has propagated.
3. At your DNS provider, add:
   - `www` → `CNAME` → `<org>.github.io`
   - For the apex domain (`satayg.com`), use GitHub’s recommended `A` records or an `ALIAS`/`ANAME` record to `<org>.github.io`.

**Important:** This site uses root-absolute paths (e.g. `/assets/...`). It is intended to run at the domain root (`www.satayg.com`). The `*.github.io/<repo>/` preview URL will not load assets correctly until the custom domain is active.

### Legacy URL redirects

These old Wix paths redirect to the new site (HTML redirect pages, since GitHub Pages has no server-side redirect config):

| Old path | New path |
|---|---|
| `/stores` | `/where-to-buy/` |
| `/product-page/satay-sauce` | `/satay-sauce/` |
| `/product-page/satay-lemongrass-marinade` | `/lemongrass-marinade/` |

### After launch

- Test each page on desktop and mobile.
- Test the three legacy redirect URLs above.
- Connect Google Search Console and submit `/sitemap.xml`.
- Add any remaining Wix recipe or blog URL redirects before shutting Wix down.

## Run locally

```bash
cd satay-g-website
python3 -m http.server 8080
```

Open [http://localhost:8080/](http://localhost:8080/).

## Security

- HTTPS is provided by GitHub Pages (enable **Enforce HTTPS** in repo settings).
- Content Security Policy restricts scripts, styles, and images to this origin only.
- External social links use `rel="noopener noreferrer"`.
- No user input, forms, or server-side code — attack surface is minimal.
