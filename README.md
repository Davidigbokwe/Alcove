# Alcove Homes

A React + TypeScript website built with Vite. The existing teal design is preserved, with property content restored from [Alcove Homes](https://alcovehomesng.com/).

## Development

Requires Node.js 22.12+ or 24+ and npm.

```sh
npm ci
npm run dev
```

## Checks and production build

```sh
npm run typecheck
npm test
npm run lint
npm run build
npm run preview
```

Deploy the `dist` directory to a static host with an SPA fallback to `index.html`. React Router provides separate pages at the original site URLs, including `/about-us/`, `/properties/`, `/gallery/`, `/contact-us/` and the four `/property/.../` addresses. Each page has its own component and content, with a shared header and footer. Additional pages cover `/neighbourhood/`, `/details/` and `/floor-plans/`. Unknown URLs show a not-found page.

`public/_redirects` configures the fallback on hosts that support this format (including Netlify and Cloudflare Pages). On other hosts, configure the same fallback so opening or refreshing a property URL works.

## Structure

- `src/main.tsx` — React entry point
- `src/App.tsx` — application root
- `src/pages` — individual home, about, properties, property detail, contact, gallery and information pages
- `src/components` — navigation, enquiry, gallery, floor plans, media and UI components
- `src/data/property.ts` — property content
- `public/images` and `public/floor-plans` — locally hosted original property assets

## Enquiries and content

The enquiry form prepares an email in the visitor’s email application; the visitor must send it there. No backend form delivery is configured. The email address, phone and street address were verified against the live contact page. Property links preselect the relevant home in the enquiry form.

Direct reads of the original property pages confirmed starting prices of ₦225m (apartment), ₦250m (maisonette), ₦380m (terrace) and ₦410m (penthouse), with floor areas of 138, 143, 194 and 276 sqm respectively. The live property pages were updated in September 2026; search-engine copies of some pages still show older prices. Confirm availability with the sales team.

`src/data/original-assets.json` records the local photos and plans restored from the individual pages: 48 gallery photographs, individual property galleries, and the apartment, maisonette and terrace plans. The original penthouse listing contains no downloadable plan image; its page invites the visitor to request one. About-page content identifies GlobalMix Capital Ltd. and its values without repeating the original page's inconsistent experience claims or placeholder statistics.

The video uses YouTube and the map uses Google Maps. All property photographs and floor-plan images are served locally. No TanStack or Lovable runtime, build plugin or asset service is required.
