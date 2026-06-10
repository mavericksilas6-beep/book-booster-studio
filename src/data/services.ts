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
  whatItIs: string[];
  whyItMatters: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  faq: { q: string; a: string }[];
  tiers: ServiceTier[];
  startingPrice: number;
  defaultTier: string;
  icon: "search" | "feather" | "layout" | "users" | "list" | "image";
};

export type Bundle = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  listPrice: number;
  includes: string[]; // service slugs
  highlight?: boolean;
  why: string;
};

export const SERVICES: Service[] = [
  {
    slug: "amazon-seo",
    name: "Amazon SEO Optimization",
    shortName: "Amazon SEO",
    tagline: "Be found by the readers who are already searching.",
    oneLiner:
      "Restructure metadata, backend keywords, and categories so your book surfaces for the searches that matter.",
    whatItIs: [
      "A full overhaul of how your book is indexed inside Amazon — title metadata, subtitle, the seven backend keyword fields, two category placements, and the quietly important series and contributor fields. Every input is researched from real Amazon search behaviour, not guesswork or generic SEO advice borrowed from other industries.",
      "We treat your listing as a small machine with seven or eight moving parts. Each one is tuned to a specific kind of reader query — broad genre searches, mood-based searches, comp-author searches, setting-and-era searches. When the parts agree, Amazon's algorithm starts surfacing your book in places you never paid for.",
      "You receive a paste-ready document so you (or we) can update KDP in a single sitting, plus the reasoning behind every choice so you can defend it to a co-author, agent, or sceptical inner editor.",
    ],
    whyItMatters: [
      "Amazon is the world's largest book search engine. Most indie authors leave sixty to eighty percent of their discoverability on the table simply because their keywords describe the book they wrote, not the searches readers actually type. The gap between those two things is where careers stall.",
      "Fixing it is not about gaming a system. It is about translating your novel into the vocabulary readers already use when they go looking — and then making sure Amazon hears that translation clearly. Once it does, the book starts being recommended alongside the comp titles you've always belonged next to.",
      "This is the single highest-leverage change most authors can make, and it compounds. Every other piece of marketing — ads, social, mailing list — gets cheaper and easier once the underlying listing is doing its job.",
    ],
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
      { name: "Standard", price: 600, turnaround: "5 days", features: ["Full keyword & metadata overhaul", "Backend + categories + contributor fields", "30-day ranking check-in"] },
    ],
    startingPrice: 600,
    defaultTier: "Standard",
    icon: "search",
  },
  {
    slug: "book-description",
    name: "Book Description Rewrite",
    shortName: "Description Rewrite",
    tagline: "From summary to sales page.",
    oneLiner:
      "Transform a flat plot summary into an emotionally hook-heavy description that converts browsers into buyers.",
    whatItIs: [
      "A complete rewrite of your Amazon book description using direct-response copywriting principles adapted for fiction. Hook, stakes, emotional pivot, social-proof slot, and a clear call to action — built in your voice, not ours.",
      "We work from your existing description, sample chapters, reviews, and the comp titles you'd be proud to be shelved next to. The goal is a page that reads like the book itself — warm if you're warm, sharp if you're sharp — but engineered to convert a curious browser into a buyer.",
      "Delivery is HTML-formatted with bold lead lines and clean paragraphs so it renders beautifully on mobile, tablet, and desktop. You also get two alternate opening hooks for live A/B testing and a reusable tagline for ads, your website, and social.",
    ],
    whyItMatters: [
      "Most browsers spend fewer than eight seconds on a book page before they decide. Your description is the only place on the page where you have a real chance to convert curiosity into a click — your cover got them to look, your description has to make them act.",
      "A summary tells what happens. A sales-driven description makes someone need to know what happens. The difference is structural: which sentence opens, which detail you withhold, where the emotional pivot lands, what the final line asks of the reader.",
      "Once it's right, every dollar you spend on ads works harder, every recommendation lands cleaner, and the book stops leaking readers at the exact moment it had earned the right to keep them.",
    ],
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
      { name: "Standard", price: 500, turnaround: "5 days", features: ["Full rewrite", "2 opening variations", "2 revision rounds", "HTML formatting", "Reusable tagline"] },
    ],
    startingPrice: 500,
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
    whatItIs: [
      "Amazon A+ Content is a quiet feature inside KDP that lets you add image-and-text modules below your description. Trad publishers use it on nearly every title. Indie authors almost never do — usually because no one told them it existed.",
      "We design and build five custom modules for your book: a hero panel, an atmospheric quote, a comparison or testimonial block, an author introduction, and a clear closing CTA. Each one is drawn from your cover's palette, your prose's voice, and the visual mood of the book itself, so the page reads as one cohesive object instead of a collage.",
      "Final delivery includes upload-ready files in Amazon's exact dimensions, a step-by-step KDP guide, and (if you'd like) done-for-you uploading so you never have to touch the dashboard.",
    ],
    whyItMatters: [
      "Amazon's own data shows A+ Content can lift conversion by three to ten percent. More importantly, it signals seriousness. Readers browsing fast on mobile pause when they hit branded visuals — the same pause that happens in a bookstore when something on a display table catches the eye.",
      "It is also one of the few places left on Amazon where indie authors can visibly out-class the competition. Most indie books skip A+ entirely, which means a single afternoon of design can put your page in the top five percent of its category for sheer polish.",
      "The lift is permanent, not seasonal — the modules sit on your page forever, doing quiet conversion work every day a reader lands on it.",
    ],
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
      { q: "Can you handle the actual upload?", a: "Yes — done-for-you upload is included." },
    ],
    tiers: [
      { name: "Standard", price: 500, turnaround: "10 days", features: ["5 custom modules", "Cover-derived palette", "Done-for-you KDP upload"] },
    ],
    startingPrice: 500,
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
    whatItIs: [
      "A full audit and rebuild of your Goodreads presence — author photo and bio (long and short versions), book metadata, additional editions, series setup, contributor links, Q&A seeding, ask-the-author activation, and the book-page layout most authors quietly get wrong.",
      "We also write a Goodreads-specific blurb (the rules and reader expectations are different from Amazon) and a set of five to eight reading-group discussion questions designed to attract book clubs — one of the most underrated drivers of long-tail sales in fiction.",
      "You can either hand us the keys and we'll do the updates, or take everything as a clean, annotated checklist and apply it yourself in an afternoon.",
    ],
    whyItMatters: [
      "Goodreads is where readers go after Amazon — to verify, to vet, to decide whether a book is worth the next forty hours of their life. It is also where librarians decide whether to recommend you, and where book clubs choose their next read.",
      "A patchy Goodreads page quietly tells those readers you're not a real author. It isn't fair, but it is true. Polish reverses that signal in the space of a single visit, often without the reader being able to articulate what changed.",
      "And unlike ads, this work doesn't expire. A rebuilt Goodreads presence keeps earning trust every time a curious reader, a librarian, or a journalist looks you up — for years.",
    ],
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
      { name: "Standard", price: 500, turnaround: "7 days", features: ["Full audit", "Author profile rebuild", "One book page optimized", "Discussion questions for book clubs"] },
    ],
    startingPrice: 500,
    defaultTier: "Standard",
    icon: "users",
  },
  {
    slug: "listopia-campaign",
    name: "Goodreads Listopia Campaign",
    shortName: "Listopia Campaign",
    tagline: "Permanent discoverability that ranks on Google.",
    oneLiner:
      "Get your book added to highly-searched Listopia lists that drive readers for years, not weeks.",
    whatItIs: [
      "Identification of fifteen to twenty-five relevant Listopia lists where your book genuinely belongs, plus an outreach and voting campaign to get it added and surfaced. Examples: 'Historical Fiction Set in Germany,' 'Strong Unwed Mothers in Literature,' 'Genealogical Sagas,' 'Books That Feel Like a Long Letter Home.'",
      "Where a perfect-fit list doesn't yet exist, we'll create it — five new lists per campaign, written so the list itself reads like a thoughtful recommendation from a well-read friend rather than a marketing exercise.",
      "Activation is done within Goodreads' terms of service using real readers who've actually engaged with your book. No bots, no fake accounts, no shortcuts that risk delisting. You receive a performance report at thirty and ninety days showing list rank and Google visibility.",
    ],
    whyItMatters: [
      "Listopia lists rank on Google — often above publisher pages and major review sites. A reader searching 'best historical fiction set in nineteenth-century Germany' lands on a Goodreads list, and if you've done this well, your book is on it.",
      "This is permanent, compounding discoverability. The lists keep ranking, the votes keep accumulating, and your book keeps being discovered by exactly the readers who were already looking for it — long after the campaign ends.",
      "No ad spend replicates this. Ads stop the moment your card declines. A well-placed Listopia presence keeps working in your sleep, for years.",
    ],
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
      { name: "Standard", price: 500, turnaround: "14 days", features: ["15–25 lists targeted", "Vote campaign", "30 + 90 day reports"] },
    ],
    startingPrice: 500,
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
    whatItIs: [
      "A curated set of ten to fifteen visual quote graphics, each pulled from a specific page of your book and designed in the visual language of your cover. Sized for Instagram feed (1:1) and Stories (9:16), with editable Canva templates so you can adjust later without coming back to us.",
      "We start by reading the book — or working from your highlights — and shortlist thirty quotable moments. Together we pick the final ten to fifteen that hit hardest: lines that strangers will screenshot, lines a Bookstagrammer will pair with a flat-lay, lines that a reader will text to a friend at midnight.",
      "You also get caption suggestions for each post and a thirty-day posting calendar so the rollout has rhythm rather than being a one-week burst that disappears.",
    ],
    whyItMatters: [
      "Quote graphics are the highest-saving, highest-sharing content on Bookstagram. They give readers something to hold onto and pass along — and the algorithm rewards that kind of engagement far more generously than it rewards cover reveals or 'buy my book' posts.",
      "Every share is a free, qualified introduction to a new reader. The book finds its audience organically while you sleep, while you write, while you're doing literally anything other than marketing.",
      "And because the graphics are designed in your cover's visual world, every share also strengthens your book's visual identity — quietly building recognition long before someone is ready to buy.",
    ],
    deliverables: [
      "10–15 curated quote graphics pulled from your book",
      "Each quote in feed (1:1) and Story (9:16) sizes",
      "PNG and editable Canva templates",
      "Caption suggestions for each post",
      "30-day posting calendar",
    ],
    process: [
      { title: "Read", description: "We read the book (or your highlights) and shortlist 30 quotable moments." },
      { title: "Curate", description: "Together we pick the final 10–15 that hit hardest." },
      { title: "Design", description: "Each quote designed in the visual world of your cover." },
      { title: "Deliver", description: "All assets in a Drive folder + Canva templates + posting calendar." },
    ],
    faq: [
      { q: "Do you write the quotes?", a: "No — they're your words, pulled directly from the book. We're curators and designers, not co-authors." },
      { q: "Can you post them for me?", a: "Posting is a separate add-on. Most authors prefer to post themselves so the captions stay in their voice." },
      { q: "What if my book has spoilers?", a: "We're careful. Every quote is selected to intrigue without giving anything away." },
    ],
    tiers: [
      { name: "Standard", price: 300, turnaround: "5 days", features: ["10–15 quote graphics", "Feed + Story sizes", "Editable Canva templates", "30-day posting calendar"] },
    ],
    startingPrice: 300,
    defaultTier: "Standard",
    icon: "image",
  },
];

// Bundles ordered by importance/effectiveness, $1,200 – $2,000.
export const BUNDLES: Bundle[] = [
  {
    slug: "foundation",
    name: "Foundation",
    tagline: "The launch trio: be found, convert, get shared.",
    price: 1000,
    listPrice: 1400, // 600+500+300
    includes: ["amazon-seo", "book-description", "instagram-graphics"],
    why: "If you only do three things, do these. Amazon SEO makes the book findable, the rewritten description converts the click, and quote graphics turn early readers into amplifiers. Save $400 vs. buying separately.",
  },
  {
    slug: "authority",
    name: "Authority",
    tagline: "Foundation, plus the premium publisher polish.",
    price: 1250,
    listPrice: 1900, // 600+500+500+300
    includes: ["amazon-seo", "book-description", "aplus-content", "instagram-graphics"],
    highlight: true,
    why: "Adds Amazon A+ Content — the visual modules that make your page look like a major publisher's. The conversion lift typically pays for the bundle within weeks. Save $650.",
  },
  {
    slug: "marquee",
    name: "Full Marquee",
    tagline: "Everything we do, working in concert.",
    price: 1500,
    listPrice: 2900, // 600+500+500+500+500+300
    includes: ["amazon-seo", "book-description", "aplus-content", "goodreads-optimization", "listopia-campaign", "instagram-graphics"],
    why: "All six services. Amazon, Goodreads, and social all rebuilt and optimized in parallel. Permanent discoverability through Listopia, full credibility through Goodreads, and conversion polish across the board. Save $1,400.",
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const getBundle = (slug: string) =>
  BUNDLES.find((b) => b.slug === slug);
