## Goal
Remove all prices across the site and expand each service with richer narrative copy.

## 1. Strip pricing from data (`src/data/services.ts`)
- Keep the `ServiceTier`, `Service`, and `Bundle` types but stop using price-related fields in the UI. Leave the fields in place for now (no breaking schema change), but in the components we'll ignore them.
- Expand each of the 6 services' `whatItIs` and `whyItMatters` from one paragraph to 2–3 richer paragraphs (longer narrative, same warm tone). Services affected:
  1. Amazon SEO Optimization
  2. Book Description Rewrite
  3. Amazon A+ Content
  4. Goodreads Profile & Book Page
  5. Goodreads Listopia Campaign
  6. Instagram Quote Graphics

## 2. Services list page (`src/routes/services.tsx`)
- Remove the right-column "Flat $X / turnaround" price block on each service card.
- Right-side sticky "Your package" sidebar: remove Subtotal, Bundle savings, Estimate. Keep the service count and the CTA button ("Start a package" / "Review & submit").
- Update copy below the CTA to drop the "quote within 24 hours" pricing implication only if it reads as money-focused — keep the inquiry framing.

## 3. Service detail page (`src/routes/services.$slug.tsx`)
- Pricing sidebar: remove the per-tier price, keep tier name, turnaround, and feature list (rename heading from "Pricing" to "What's included" or "Engagement").
- Keep "Add to package" and "Build your package" CTAs.

## 4. Order / cart page (`src/routes/order.tsx`)
- Remove all dollar amounts: subtotal, bundle discount line, total, bundle "save $X" callouts, bundle list prices.
- Bundle cards: keep name, tagline, included services, and "why" copy. Remove price and listPrice display.
- Inquiry summary: list selected services by name only, no totals.

## 5. Homepage (`src/routes/index.tsx`)
- Scan for any price mentions (bundle teasers, "from $X" copy) and remove. Keep CTAs.

## 6. Cart context (`src/context/cart.tsx`)
- Leave logic untouched (subtotal/total still computed) so nothing breaks; just stop rendering those values. No schema change.

## Out of scope
- No backend changes, no new routes, no design-token changes.
- Testimonials, header, footer untouched.

## Files to edit
- `src/data/services.ts` (narrative expansion only)
- `src/routes/services.tsx`
- `src/routes/services.$slug.tsx`
- `src/routes/order.tsx`
- `src/routes/index.tsx` (audit + strip any price mentions)
