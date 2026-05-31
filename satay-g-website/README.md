# Satay G website

Static Vercel-ready website for Satay G.

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
- Redirects from current Wix product and stores URLs
- Official social profile links

## Publish through GitHub and Vercel

1. Create a new GitHub repository, for example `satay-g-website`.
2. Upload all files and folders from this package to the repository root.
3. In Vercel, select **Add New Project** and import the GitHub repository. The included `vercel.json` configures this as a static site with no build step.
4. Add `satayg.com` and `www.satayg.com` in the Vercel project domain settings.
5. Update DNS only after reviewing the Vercel preview deployment.
6. Keep Wix active until the live domain is confirmed and the important old URLs redirect correctly.

## Before the live domain switch

- Check each page on desktop and mobile.
- Test the three redirect URLs in `vercel.json`.
- Connect Google Search Console after launch and submit `/sitemap.xml`.
- Add any existing Wix recipe or blog URL redirects before shutting Wix down.
