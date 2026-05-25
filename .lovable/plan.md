## Add author testimonials

Create a dedicated testimonials page and surface a curated subset on the homepage.

### 1. Shared data file — `src/data/testimonials.ts`

One source of truth, imported by both the new page and the homepage.

- 1 real testimonial: **Thomas Hardy**, *Where the Sabiá Bird Sings*.
- 5 fictional testimonials in the same warm, literary tone as the existing Helena Bauer quote (different genres: literary, historical, romance, thriller, memoir).
- Each entry: `name`, `bookTitle`, `genre`, `quote` (2–4 sentences), `service` (which Marginalia service they used), optional `featured: true` flag for the 3 shown on the homepage.

### 2. New route — `src/routes/testimonials.tsx`

- Unique `head()` meta: title "Testimonials — Marginalia", own description and og tags.
- Hero: small eyebrow "Testimonials", serif H1 "What authors say after the work is done.", short intro paragraph.
- Masonry editorial layout: CSS columns (`columns-1 md:columns-2 lg:columns-3`) with `break-inside-avoid` quote cards so varying quote lengths stagger naturally like a magazine spread.
- Each card: serif italic pull-quote with a `Quote` lucide icon, then author name, book title (italic), genre, and the service tag as a small chip. Walnut/cream palette already in tokens.
- Closing CTA band linking to `/order` (matches the existing pattern on About/Results).

### 3. Homepage section — `src/routes/index.tsx`

- Insert a new "Voices" section between the Pillars and Process sections.
- Eyebrow + serif heading + 3 featured testimonials in a smaller masonry block.
- "Read all testimonials →" link to `/testimonials`.

### 4. Navigation — `src/components/site/Header.tsx`

- Add `{ to: "/testimonials", label: "Testimonials" }` to `NAV`, between Results and About.

### 5. Footer — `src/components/site/Footer.tsx`

- Add Testimonials link under the Studio column.

### Technical notes

- All new colors/typography use existing semantic tokens (`text-primary`, `text-foreground`, `font-serif`, `hairline`, `bg-secondary/40`) — no new design tokens.
- No backend, no new dependencies. Pure presentation.
- TanStack Start route file convention; route file created before any `<Link to="/testimonials">` so typecheck passes.