## Professional Book Marketing Services Website

A polished, editorial-feel multi-page site offering 6 specialist services for indie authors. Visitors can browse, deeply understand each service, **select the ones they want, build a custom order, and submit it** — Fiverr-quality presentation with the flexibility of a cart.

### Visual Direction
- **Palette**: Warm Sand (#faf8f5 background, #f0ebe3 surfaces, #c9b99a accents, #8b7355 deep brown for primary). Approachable, premium, indie-author-friendly.
- **Typography**: Libre Baskerville (headings — book-publisher feel) + IBM Plex Sans (body — clean and trustworthy).
- **Style**: Editorial layout, generous whitespace, subtle paper-texture cues, refined serif headlines, soft hairline dividers, tasteful micro-animations on scroll.

### Pages

**1. Home (`/`)**
- Hero: strong serif headline ("Marketing built for the books traditional publishers overlook"), subheadline, primary CTA "Build Your Package", secondary "See Services".
- Trust strip (Amazon, Goodreads, Kindle, BookBub logos as muted marks).
- 6-service grid with icons + one-liners → each links to detail.
- "Why authors choose us" — 3 value pillars (Discoverability, Conversion, Credibility).
- Mini results/testimonial section (placeholder quotes).
- Process overview (Order → Onboarding → Delivery → Revisions).
- Final CTA band.

**2. Services (`/services`)**
- Full grid of all 6 services as rich cards with description, deliverables, "Add to Order" button, starting price, turnaround.
- Sticky "Your Order" summary panel on the side (shows selected services + running total + "Continue to Checkout").
- Each card links to its detail page.

**3. Service detail pages** — one route each, deep explanation:
- `/services/amazon-seo`
- `/services/book-description`
- `/services/aplus-content`
- `/services/goodreads-optimization`
- `/services/listopia-campaign`
- `/services/instagram-graphics`

Each page includes: hero with service name + tagline, "What it is" (plain-English explanation), "Why it matters" (the problem it solves), "What you get" (deliverables checklist), "How it works" (3–4 step process), example/before-after visual, FAQ (3–5 Qs), pricing tiers if applicable, "Add to Order" CTA.

**4. Build Your Package (`/order`)**
- À-la-carte builder: all 6 services as toggleable cards with quantity/tier selectors where relevant.
- Live order summary with itemized list, subtotal, optional bundle discount hint ("Add 2 more for 10% off").
- Project details form: book title, genre, Amazon/Goodreads links, target audience, deadline, notes, name + email.
- Submit → sends inquiry (stored in Lovable Cloud + email confirmation message on screen).

**5. About (`/about`)**
- Founder/agency story, philosophy ("we treat indie books with the polish trad publishers reserve for their own"), credentials, approach.

**6. Case Studies / Results (`/results`)**
- 3–4 placeholder case studies with before/after metrics (ranking jumps, sales lift, reviews gained), genre context, services used. Easy to swap real ones in later.

**7. Contact (`/contact`)**
- Simple form (name, email, message), email link, expected response time, FAQ link.

### Shared
- Header with logo (placeholder name "Marginalia" — easy to rename later), nav, prominent "Build Package" button. Cart count badge when items selected.
- Footer with services list, quick links, contact, social.
- Cart state persists across pages (localStorage) so users can browse and accumulate selections.
- Every route has its own SEO metadata (title, description, og tags).

### Backend (Lovable Cloud)
- `service_inquiries` table storing submitted orders: contact info, selected services (jsonb), book details, message, timestamp, status.
- Row-level security: insert open to public, read restricted (admin only — can be added later).
- Submission confirmation shown on success.

### Out of scope (for now)
- Real payment processing (Stripe/Paddle can be added later — for now orders are inquiries).
- Admin dashboard to view inquiries (can be added in a later iteration).
- Auth / user accounts.
- CMS for editing case studies (hardcoded initially).

Approve and I'll build it.