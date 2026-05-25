export type Testimonial = {
  name: string;
  bookTitle: string;
  genre: string;
  quote: string;
  service: string;
  featured?: boolean;
  real?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Thomas Hardy",
    bookTitle: "Where the Sabiá Bird Sings",
    genre: "Literary fiction · Brazilian diaspora",
    quote:
      "I'd been quietly proud of the book and quietly invisible on Amazon. Marginalia changed the second part without touching the first. The description they wrote is the one I wish I'd had the courage to write myself — and the A+ panels finally make the page feel like the book inside it.",
    service: "Authority Bundle",
    featured: true,
    real: true,
  },
  {
    name: "Helena Bauer",
    bookTitle: "The Long Inheritance",
    genre: "Historical fiction · Germany 1888",
    quote:
      "They treated my novel like it deserved to be on a Waterstones table. Sales tripled in a quarter, but more than that — for the first time, the page felt like it belonged to the same book I'd written.",
    service: "Full Marquee",
    featured: true,
  },
  {
    name: "Marcus Hale",
    bookTitle: "Salt and Iron",
    genre: "Literary fiction · Coastal saga",
    quote:
      "The Listopia campaign is still working months later. People keep finding the book through Google searches I never would have thought to target. It's the only marketing I've ever paid for that kept compounding after the invoice cleared.",
    service: "Listopia Campaign",
    featured: true,
  },
  {
    name: "Priya Sharma",
    bookTitle: "The Cartographer's Daughter",
    genre: "Historical romance · Series of three",
    quote:
      "They didn't just optimize one book — they reorganized the whole series so readers couldn't miss what came next. My KU income tripled in two months, and the read-through on book one to book two more than doubled.",
    service: "Amazon SEO + A+ Content",
  },
  {
    name: "Owen Castellanos",
    bookTitle: "The Quiet Hours",
    genre: "Psychological thriller",
    quote:
      "I'd written what I thought was a good description. They sent back something that made me want to buy my own book. That's the moment I understood what I'd been paying for.",
    service: "Description Rewrite",
  },
  {
    name: "Aoife Donnelly",
    bookTitle: "A Letter from the Burren",
    genre: "Memoir · Irish landscape",
    quote:
      "Memoir is hard to sell because the hook lives in the texture of the prose. Marginalia found that hook and built the whole page around it. Goodreads adds went from a trickle to something that genuinely surprises me each week.",
    service: "Goodreads Optimization",
  },
  {
    name: "Daniel Okafor",
    bookTitle: "Small Gods, Loud Cities",
    genre: "Speculative fiction",
    quote:
      "The quote graphics were the unlock I didn't know I needed. Readers started posting them, tagging me, sending the book to friends. It's the closest thing to word-of-mouth I've ever engineered.",
    service: "Quote Graphics",
  },
];

export const FEATURED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.featured);