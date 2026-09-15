# Salem Cycles — Website

A modern, responsive React website for **Salem Cycles**, a bicycle shop in
Salem, Tamil Nadu. Built with React + Vite + React Router, styled with plain
CSS (no framework), and centred entirely around WhatsApp enquiries.

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  config/site.js        ← Shop name, phone, WhatsApp number, address, hours.
                           EDIT THIS FILE to update business details anywhere
                           on the site — nothing else needs to change.
  utils/whatsapp.js      ← Builds pre-filled, URL-encoded wa.me links.
  data/
    products.js          ← Sample cycles/accessories/spares catalogue.
                           Replace with real inventory (name, price, image,
                           features) — every product card is generated
                           from this file.
    brands.js             ← Empty by default. Add real brand logos here.
    certifications.js     ← Placeholder trust items. Replace with real ones.
    highlights.js          ← "Why Ride With Us" cards.
  components/            ← Reusable UI: Header, Footer, Hero, ProductCard,
                           ProductGrid, WhatsAppButton, CTASection, etc.
  pages/                 ← Home, Cycles, Accessories, Spares, Contact, 404.
  hooks/                 ← Scroll-reveal, sticky-header and page-title hooks.
  index.css              ← Full design system (tokens, layout, animations).
```

## Updating shop information

Everything customer-facing lives in **`src/config/site.js`**:

- `whatsappNumber` — the single WhatsApp number used by every "Enquire on
  WhatsApp" button on the site (already set to `918754941951`).
- `phone`, `phoneDisplay` — shown in the footer and Contact page.
- `address` — shown in the footer, Contact page, and used to build the
  embedded Google Map (no API key required).
- `hours` — shown on the Contact page.
- `email`, `social` — left blank because they weren't supplied. Fill them
  in and the footer/contact page will show them automatically.

## Updating products

Edit **`src/data/products.js`**. Each product looks like:

```js
{
  id: "cyc-01",
  name: "Trailblazer 21-Speed MTB",
  price: "12,999",
  image: "https://.../photo.jpg",
  features: ["Lightweight alloy frame", "21-speed gears", "..."],
}
```

Add, remove or edit entries in the `cycles`, `accessories` or `spares`
arrays — the listing pages, product cards, and WhatsApp enquiry messages
all update automatically.

**Product images** currently use placeholder photos from picsum.photos so
every card renders correctly out of the box. Replace `image` with real
product photo URLs (or local files placed in `public/products/` and
referenced as `/products/filename.jpg`) when ready.

## Brands & certifications

`src/data/brands.js` and `src/data/certifications.js` ship as clearly
labelled placeholders/empty states, since no real brand or certification
details were provided. The corresponding sections render gracefully empty
until you add real entries — see the comments in each file.

## WhatsApp enquiry behaviour

- Every product card's **"Enquire on WhatsApp"** button opens WhatsApp
  with a pre-filled message containing the product name, price and
  features.
- The bottom-of-page CTA on Cycles/Accessories/Spares, the header CTA, and
  the floating button in the corner all send a generic enquiry message.
- The Contact page button sends a short "tell me more" message.
- All of these are generated from the **one** `whatsappNumber` in
  `src/config/site.js` — it is never hard-coded elsewhere.

## Notes on SEO

This is a client-rendered single-page app, so each page updates its
`<title>` and meta description on navigation (see `usePageMeta`), and
markup uses semantic HTML with a proper heading hierarchy and descriptive
alt text. For maximum search-engine visibility, consider adding
server-side rendering or pre-rendering (e.g. via a static host that
pre-renders routes) before going live.

## Accessibility & motion

- All interactive elements have visible keyboard focus states.
- Scroll/reveal animations respect `prefers-reduced-motion`.
- The mobile menu traps body scroll while open and is fully keyboard
  reachable.
