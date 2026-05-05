## Goals

1. Reprice every service to flat $500 (with two exceptions).
2. Bundle services into curated packages with totals between $1,200 and $2,000, ordered by importance/effectiveness.
3. Show contact email as `mavericksilas6@gmail.com` everywhere on the site.
4. When a visitor submits an inquiry (Order Builder or Contact form), email **mavericksilas6@gmail.com** with the visitor's details and selections. The visitor's email becomes a required field (already is) and is shown as the reply-to.

---

## 1. Service repricing (`src/data/services.ts`)

Every service flattens to a single tier at the new price. Old multi-tier structure is removed so the Order Builder and Service pages show one clean price.

| Service | New price | Importance rank |
|---|---|---|
| Amazon SEO Optimization | **$600** | 1 (highest impact — discoverability) |
| Book Description Rewrite | $500 | 2 (conversion) |
| Amazon A+ Content | $500 | 3 (conversion polish) |
| Goodreads Profile & Book Page | $500 | 4 (trust) |
| Goodreads Listopia Campaign | $500 | 5 (long-tail discovery) |
| Instagram Quote Graphics | **$300** | 6 (social amplification) |

Each service keeps its description, deliverables, process, FAQ — only the `tiers` array, `startingPrice`, and `defaultTier` change to a single tier ("Standard", flat price, same turnaround as the previous standard tier).

The Order Builder will still work as à-la-carte: tick services, see line items add up. The tier-picker UI in `src/routes/order.tsx` will be conditionally hidden when a service has only one tier (cleaner UI).

---

## 2. Curated bundles ($1,200 – $2,000)

A new `BUNDLES` array in `src/data/services.ts` defining 3 packages, ordered by effectiveness. These render on the homepage and on a new **"Packages"** section at the top of `/order`, with a one-click "Add bundle to builder" button that loads all included services into the cart.

| Bundle | Includes | Sum | Notes |
|---|---|---|---|
| **Foundation** ($1,200) | Amazon SEO ($600) + Description Rewrite ($500) + Instagram Quote Graphics ($300) — *minus $200 bundle credit* | **$1,200** | The non-negotiable launch trio: be found, convert, get shared. |
| **Authority** ($1,600) | Amazon SEO + Description Rewrite + A+ Content + Instagram Graphics — *minus $300 bundle credit* | **$1,600** | Adds the "premium publisher" Amazon page polish. |
| **Full Marquee** ($2,000) | All 6 services ($3,100 list) — *minus $1,100 bundle credit* | **$2,000** | Everything: discoverability + conversion + trust + permanent Goodreads visibility. |

Bundles are presented as fixed packages with their own price (not auto-calculated from items + percent discount). Selecting a bundle pre-fills the cart at the bundle price; the existing per-item bundle-discount logic in `src/context/cart.tsx` is removed to avoid double-discounting.

---

## 3. Contact email change

- `src/routes/contact.tsx`: replace `hello@marginalia.studio` with `mavericksilas6@gmail.com` (display + `mailto:` link).
- `src/components/site/Footer.tsx`: same swap if email appears there.

---

## 4. Inquiry email notifications → `mavericksilas6@gmail.com`

Every Order Builder submission and Contact form submission already inserts a row into `service_inquiries`. We'll add an **email notification** so you receive each inquiry in your inbox at `mavericksilas6@gmail.com` with the visitor's name, email (as reply-to), book info, selected services, and total.

### Email infrastructure

Use **Lovable's built-in email system** (no third-party API key needed):
1. Set up an email sender domain (one-time dialog — you pick the domain emails come from, e.g. `notify.yourdomain.com`).
2. Set up the email queue infrastructure.
3. Scaffold transactional email templates.
4. Create one template: `inquiry-received` — sent to `mavericksilas6@gmail.com` (hardcoded "to" address) with all submission details, styled to match the Warm Sand brand. Visitor's email goes in the body and as `reply_to` so you can reply with one click.
5. Wire the Order Builder and Contact form to call the send function right after the database insert.

Both forms keep their existing "thank you" UI on the visitor's side; the email goes silently to you.

If you don't already have a domain ready, you'll see a one-step setup dialog when we begin.

---

## Files touched

- `src/data/services.ts` — flatten tiers, new prices, add `BUNDLES` array
- `src/context/cart.tsx` — remove auto bundle discount; add bundle support
- `src/routes/order.tsx` — render Packages section, hide tier-picker for single-tier services, trigger email after insert
- `src/routes/services.tsx` & `src/routes/services.$slug.tsx` — show single price
- `src/routes/index.tsx` — feature the 3 bundles on the home page
- `src/routes/contact.tsx` — new email + trigger notification on submit
- `src/components/site/Footer.tsx` — new email
- New: `src/lib/email-templates/inquiry-received.tsx` + registry update
- New: `src/lib/email/send.ts` helper
- Email infrastructure setup (sender domain + queue + scaffolded routes)

No database schema changes needed — the existing `service_inquiries` table holds everything.
