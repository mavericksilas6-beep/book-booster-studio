export type ServiceTier = {
  name: string;
  price: number;
  turnaround: string;
  features: string[];
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  oneLiner: string;
  whatItIs: string;
  whyItMatters: string;
  deliverables: string[];
  process: { title: string; description: string }[];
  faq: { q: string; a: string }[];
  tiers: ServiceTier[];
  startingPrice: number;
  defaultTier: string;
  icon: "search" | "feather" | "layout" | "users" | "list" | "image";
};

export const SERVICES: Service[] = [
  {
    slug: "amazon-seo",
    name: "Amazon SEO Optimization",
    shortName: "Amazon SEO",
    tagline: "Be found by the readers who are already searching.",
    oneLiner:
      "Restructure metadata, backend keywords, and categories so your book surfaces for the searches that matter.",
    whatItIs:
      "A full overhaul of how your book is indexed inside Amazon — title metadata, subtitle, seven backend keyword fields, two category placements, and the often-ignored series and contributor fields. Every input is researched from real Amazon search data, not guesswork.",
    whyItMatters:
      "Amazon is the world's largest book search engine. Most indie authors leave 60–80% of their discoverability on the table simply because their keywords describe the book they wrote, not the searches readers actually type. We close that gap.",
    deliverables: [
      "Keyword research report (25+ ranked phrases with search volume signals)",
      "Optimized title and subtitle recommendations",
      "All seven backend keyword fields written and ready to paste",
      "Two best-fit Amazon category recommendations (including hidden categories)",
      "Updated series, contributor, and edition metadata",
      "30-day ranking check-in report",
    ],
    process: [
      { title: "Discovery", description: "You share your book, current listing, and target reader. We read your description and sample chapters." },
      { title: "Research", description: "We mine Amazon, Publisher Rocket, and KDP data for the highest-intent keywords your book can realistically rank for." },
      { title: "Delivery", description: "You receive a paste-ready document with every field optimized, plus instructions for KDP." },
      { title: "Check-in", description: "Thirty days later we re-check rankings and recommend any second-pass adjustments." },
    ],
    faq: [
      { q: "Will this guarantee bestseller status?", a: "No one honest can promise that. What we can promise is that your book will be discoverable for the searches it should be ranking for. Sales depend on cover, description, and reviews working together — which is why we offer those services too." },
      { q: "How long until I see results?", a: "Amazon typically re-indexes within 72 hours. Meaningful ranking shifts usually appear within 2–4 weeks." },
      { q: "Do I need to be in KDP Select?", a: "No. This works for any book listed on Amazon, wide or exclusive." },
    ],
    tiers: [
      { name: "Single Title", price: 149, turnaround: "5 days", features: ["One book", "All deliverables included", "30-day check-in"] },
      { name: "Series (up to 3)", price: 349, turnaround: "8 days", features: ["Up to 3 titles", "Series-level keyword strategy", "Cross-book linking"] },
      { name: "Backlist (4+)", price: 99, turnaround: "Per book", features: ["Per-title pricing for 4+ books", "Volume strategy session", "Quarterly re-check"] },
    ],
    startingPrice: 149,
    defaultTier: "Single Title",
    icon: "search",
  },
  {
    slug: "book-description",
    name: "Book Description Rewrite",
    shortName: "Description Rewrite",
    tagline: "From summary to sales page.",
    oneLiner:
      "Transform a flat plot summary into an emotionally hook-heavy description that converts browsers into buyers.",
    whatItIs:
      "A complete rewrite of your Amazon book description using direct-response copywriting principles adapted for fiction. Hook, stakes, emotional pivot, social proof slot, and a clear call to action — formatted with HTML so it renders beautifully on every device.",
    whyItMatters:
      "Most browsers spend less than 8 seconds on a book page. Your description is the only place where you have a real chance to convert curiosity into a click. A summary tells what happens. A sales-driven description makes someone need to know what happens.",
    deliverables: [
      "Fully rewritten description (250–400 words, optimized for length)",
      "Two opening-hook variations to A/B test",
      "HTML-formatted version with bold lead lines and clean paragraphs",
      "A short tagline you can reuse on ads, your website, and social",
      "Comp-title positioning notes",
    ],
    process: [
      { title: "Read", description: "We read your existing description, sample chapters, reviews, and comp titles." },
      { title: "Strategy", description: "We identify the emotional hook, the stakes, and the reader the book is really for." },
      { title: "Draft", description: "First draft delivered with two opening variations and inline notes explaining each choice." },
      { title: "Revise", description: "Two free revision rounds — your voice, your story, our structure." },
    ],
    faq: [
      { q: "Will it still sound like my book?", a: "Yes. We mirror the tone of your prose so the description feels like a natural extension of the novel, not ad copy bolted on top." },
      { q: "Can you write a description for a book that isn't published yet?", a: "Absolutely. Pre-launch is actually the ideal time." },
      { q: "What if I hate the first draft?", a: "Two revision rounds are included, and we always lead with your feedback. Most authors approve by round two." },
    ],
    tiers: [
      { name: "Standard", price: 119, turnaround: "5 days", features: ["Full rewrite", "2 opening variations", "2 revision rounds"] },
      { name: "Premium", price: 199, turnaround: "5 days", features: ["Everything in Standard", "Series/landing-page tagline", "Ad-headline package (5 hooks)"] },
    ],
    startingPrice: 119,
    defaultTier: "Standard",
    icon: "feather",
  },
  {
    slug: "aplus-content",
    name: "Amazon A+ Content",
    shortName: "A+ Content",
    tagline: "The premium book-page polish trad publishers don't talk about.",
    oneLiner:
      "Visual, branded content panels that make your Amazon page look like a major publisher's — because most indie authors don't even know this exists.",
    whatItIs:
      "Amazon A+ Content is a feature inside KDP that lets you add image-and-text modules below your description. We design and build the modules — comparison charts, atmospheric quote panels, author intro, what-readers-are-saying — and ship them ready to upload.",
    whyItMatters:
      "Amazon's own data shows A+ Content can lift conversion by 3–10%. More importantly, it signals 'this is a serious book.' Readers browsing fast on mobile pause when they hit branded visuals. Most indie books skip this entirely. Yours won't.",
    deliverables: [
      "5 custom A+ modules (hero, atmosphere, comparison/testimonial, author, CTA)",
      "Original graphics designed in your book's color palette",
      "Optimized image files in correct Amazon dimensions",
      "KDP upload guide with module ordering",
      "One revision round per module",
    ],
    process: [
      { title: "Brand discovery", description: "We pull a palette from your cover and identify the visual mood of your book." },
      { title: "Layout drafts", description: "Wireframes for all five modules — you approve direction before final art." },
      { title: "Design", description: "Final graphics, typography, and copy crafted as one cohesive system." },
      { title: "Handoff", description: "Files delivered as upload-ready assets with a step-by-step KDP guide." },
    ],
    faq: [
      { q: "Do I need a brand logo?", a: "No — for fiction, we usually build around your cover art and a typographic mark. We can design a simple author wordmark if you'd like." },
      { q: "Will this work for non-fiction?", a: "Yes, and the conversion lift tends to be even higher for non-fiction." },
      { q: "Can you handle the actual upload?", a: "Optional add-on. Most authors prefer to upload themselves with our guide; we offer a done-for-you upload for an extra $40." },
    ],
    tiers: [
      { name: "Standard", price: 249, turnaround: "10 days", features: ["5 custom modules", "Cover-derived palette", "Upload guide"] },
      { name: "Premium", price: 379, turnaround: "12 days", features: ["7 modules + author wordmark", "Done-for-you KDP upload", "Mobile-preview proof"] },
    ],
    startingPrice: 249,
    defaultTier: "Standard",
    icon: "layout",
  },
  {
    slug: "goodreads-optimization",
    name: "Goodreads Profile & Book Page",
    shortName: "Goodreads Optimization",
    tagline: "Build trust with 150 million readers.",
    oneLiner:
      "Polish your author profile and book page so librarians, book clubs, and genre readers take you seriously.",
    whatItIs:
      "A full audit and rebuild of your Goodreads presence — author photo and bio, book metadata, additional editions, series setup, Q&A seeding, ask-the-author, and the book-page layout most authors get wrong.",
    whyItMatters:
      "Goodreads is where readers go after Amazon. It's also where librarians decide whether to recommend you and where book clubs choose their next read. A patchy Goodreads page quietly tells them you're not a real author. Polish reverses that signal in an hour of reading.",
    deliverables: [
      "Rewritten author bio (long and short versions)",
      "Verified author profile setup",
      "Book page metadata cleanup (correct edition, series, genre tags)",
      "Ask-the-author seed questions and answers",
      "Goodreads-specific blurb (different rules than Amazon)",
      "Reading-group discussion questions (5–8) to attract book clubs",
    ],
    process: [
      { title: "Audit", description: "Full screenshot audit of current profile and book page with annotated issues." },
      { title: "Rebuild", description: "We rewrite, restructure, and submit librarian edits where needed." },
      { title: "Activate", description: "Seed Q&A, add discussion questions, link series, schedule first ask-the-author." },
    ],
    faq: [
      { q: "Do I have to give you my Goodreads password?", a: "Only if you want us to do the updates for you. Otherwise we deliver everything as a checklist you apply yourself." },
      { q: "What about Goodreads reviews?", a: "We never buy or solicit fake reviews. Period. We do help you set up legitimate ARC and book-club outreach." },
      { q: "I'm not verified as an author yet — can you help?", a: "Yes, that's the first step we handle." },
    ],
    tiers: [
      { name: "Profile + 1 Book", price: 169, turnaround: "7 days", features: ["Full audit", "Author profile rebuild", "One book page optimized"] },
      { name: "Profile + Series", price: 289, turnaround: "10 days", features: ["Everything above", "Up to 4 books linked as series", "Series landing strategy"] },
    ],
    startingPrice: 169,
    defaultTier: "Profile + 1 Book",
    icon: "users",
  },
  {
    slug: "listopia-campaign",
    name: "Goodreads Listopia Campaign",
    shortName: "Listopia Campaign",
    tagline: "Permanent discoverability that ranks on Google.",
    oneLiner:
      "Get your book added to highly-searched Listopia lists that drive readers for years, not weeks.",
    whatItIs:
      "Identification of 15–25 relevant Listopia lists where your book belongs, plus an outreach and voting campaign to get it added and surfaced. Examples: 'Historical Fiction Set in Germany,' 'Strong Unwed Mothers in Literature,' 'Genealogical Sagas.'",
    whyItMatters:
      "Listopia lists rank on Google. A reader searching 'best historical fiction set in 19th century Germany' lands on a Goodreads list — and your book is on it. This is permanent, compounding discoverability that no ad spend can replicate.",
    deliverables: [
      "Curated list of 15–25 high-intent Listopia lists",
      "Book added to every eligible list",
      "Initial vote campaign (within Goodreads ToS — real readers only)",
      "5 nominated 'create a new list' opportunities where appropriate",
      "Performance report at 30 and 90 days",
    ],
    process: [
      { title: "Mapping", description: "We map every Listopia list your book genuinely belongs on, ranked by search traffic." },
      { title: "Inclusion", description: "Add the book where eligible; submit for librarian addition where needed." },
      { title: "Activation", description: "Coordinated voting from your existing readers to push initial visibility." },
      { title: "Report", description: "Track ranking position on each list and Google search visibility." },
    ],
    faq: [
      { q: "Is this against Goodreads' rules?", a: "No. We only work with real readers who have actually read or added your book. We never use bots or fake accounts — that gets books delisted." },
      { q: "Can I do this myself?", a: "Yes, and we'll happily share the list of lists. Most authors hire us because finding the right 20 lists out of thousands and orchestrating activation takes 15+ hours." },
      { q: "How long do results last?", a: "Years. Listopia lists are evergreen and continue ranking on Google long after the campaign ends." },
    ],
    tiers: [
      { name: "Standard", price: 199, turnaround: "14 days", features: ["15+ lists", "Vote campaign", "30-day report"] },
      { name: "Premium", price: 349, turnaround: "21 days", features: ["25+ lists", "5 new-list creations", "30 + 90 day reports"] },
    ],
    startingPrice: 199,
    defaultTier: "Standard",
    icon: "list",
  },
  {
    slug: "instagram-graphics",
    name: "Instagram Quote Graphics",
    shortName: "Quote Graphics",
    tagline: "Your most powerful lines, ready to post.",
    oneLiner:
      "We pull the unforgettable lines from your book and design them into ready-to-post graphics that feel like your book.",
    whatItIs:
      "A curated set of 10–20 visual quote graphics, each pulled from a specific page of your book, designed in your cover's visual language. Sized for Instagram feed, Stories, and Reels covers. You schedule, post, repeat.",
    whyItMatters:
      "Quote graphics are the highest-saving, highest-sharing content on Bookstagram. They give readers something to hold onto and pass along — which means your book finds new readers organically while you sleep.",
    deliverables: [
      "Curated selection of 10–20 quotes pulled from your book",
      "Each quote designed in feed (1:1) and Story (9:16) sizes",
      "PNG and editable Canva templates so you can recolor for seasons",
      "Caption suggestions for each post",
      "30-day posting calendar",
    ],
    process: [
      { title: "Read", description: "We read the book (or your highlights) and shortlist 30 quotable moments." },
      { title: "Curate", description: "Together we pick the final 10–20 that hit hardest." },
      { title: "Design", description: "Each quote designed in the visual world of your cover." },
      { title: "Deliver", description: "All assets in a Drive folder + Canva templates + posting calendar." },
    ],
    faq: [
      { q: "Do you write the quotes?", a: "No — they're your words, pulled directly from the book. We're curators and designers, not co-authors." },
      { q: "Can you post them for me?", a: "Posting is a separate add-on. Most authors prefer to post themselves so the captions stay in their voice." },
      { q: "What if my book has spoilers?", a: "We're careful. Every quote is selected to intrigue without giving anything away." },
    ],
    tiers: [
      { name: "Starter (10)", price: 89, turnaround: "5 days", features: ["10 quote graphics", "Feed + Story sizes", "Caption suggestions"] },
      { name: "Full (20)", price: 159, turnaround: "8 days", features: ["20 quote graphics", "Editable Canva templates", "30-day posting calendar"] },
    ],
    startingPrice: 89,
    defaultTier: "Starter (10)",
    icon: "image",
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);