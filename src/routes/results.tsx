import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, Quote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Case Studies — Marginalia" },
      { name: "description", content: "Real ranking lifts, sales increases, and reviews gained from Marginalia author marketing campaigns." },
      { property: "og:title", content: "Results & Case Studies — Marginalia" },
      { property: "og:description", content: "Real results from real indie authors." },
    ],
  }),
  component: ResultsPage,
});

const CASE_STUDIES = [
  {
    title: "The Long Inheritance",
    genre: "Historical fiction · Germany 1888",
    services: ["Amazon SEO", "A+ Content", "Description Rewrite"],
    metrics: [
      { label: "Amazon ranking (genre)", before: "#84,000", after: "#1,200" },
      { label: "Daily organic sales", before: "1–2", after: "18–24" },
      { label: "Conversion rate", before: "2.1%", after: "5.8%" },
    ],
    quote: "I'd been releasing into a void for two years. Within six weeks of working with Marginalia, my book was selling itself. The A+ panels alone changed how serious my page felt.",
    author: "Helena Bauer",
  },
  {
    title: "Salt and Iron",
    genre: "Literary fiction · Coastal saga",
    services: ["Goodreads Optimization", "Listopia Campaign", "Quote Graphics"],
    metrics: [
      { label: "Goodreads adds (90 days)", before: "31", after: "1,847" },
      { label: "Listopia placements", before: "2", after: "23" },
      { label: "Instagram saves / week", before: "8", after: "340" },
    ],
    quote: "The Listopia campaign is still working months later. People keep finding the book through Google searches I never would have thought to target.",
    author: "Marcus Hale",
  },
  {
    title: "The Cartographer's Daughter",
    genre: "Historical romance · Series of three",
    services: ["Amazon SEO (Series)", "A+ Content", "Description Rewrite"],
    metrics: [
      { label: "Read-through (book 1 → 2)", before: "31%", after: "67%" },
      { label: "Series page views / day", before: "40", after: "520" },
      { label: "KU page reads / month", before: "12k", after: "94k" },
    ],
    quote: "They didn't just optimize one book — they reorganized the whole series so readers couldn't miss what came next. My KU income tripled.",
    author: "Priya Sharma",
  },
];

function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-primary">Results</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
        Quiet work. Loud numbers.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Three recent case studies. Genres and details lightly anonymized at the authors' request. Numbers are real.
      </p>

      <div className="mt-16 space-y-12">
        {CASE_STUDIES.map((cs, idx) => (
          <article key={cs.title} className="overflow-hidden rounded-lg border hairline bg-card shadow-sm">
            <div className="grid gap-8 p-8 lg:grid-cols-12 lg:p-10">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">
                  Case study {String(idx + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground">{cs.title}</h2>
                <p className="mt-1 text-sm italic text-muted-foreground">{cs.genre}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <span key={s} className="rounded-full border hairline bg-secondary/70 px-3 py-1 text-xs text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <figure className="mt-7 border-l-2 border-primary/40 pl-5">
                  <Quote className="h-4 w-4 text-primary/60" />
                  <blockquote className="mt-2 font-serif text-lg italic leading-snug text-foreground">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-muted-foreground">— {cs.author}</figcaption>
                </figure>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-px overflow-hidden rounded-lg border hairline bg-[oklch(0.88_0.018_75)]">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="grid grid-cols-3 items-center gap-4 bg-background p-5">
                      <p className="text-sm text-muted-foreground">{m.label}</p>
                      <p className="text-center font-serif text-lg text-muted-foreground line-through">{m.before}</p>
                      <div className="flex items-center justify-end gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <p className="font-serif text-2xl text-foreground">{m.after}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-lg bg-primary p-12 text-center text-primary-foreground">
        <h2 className="font-serif text-4xl">Your book could be next.</h2>
        <p className="mt-3 opacity-80">Build a package today. First reply within a business day.</p>
        <Link to="/order" className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5">
          Start your package <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}