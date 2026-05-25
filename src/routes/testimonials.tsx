import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Marginalia Author Marketing" },
      {
        name: "description",
        content:
          "What indie authors say after working with Marginalia — quiet, careful praise from novelists, memoirists, and series writers.",
      },
      { property: "og:title", content: "Testimonials — Marginalia" },
      {
        property: "og:description",
        content: "Praise from indie authors whose books we've helped readers actually find.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-primary">Testimonials</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
        What authors say after the work is done.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        We work quietly, one book at a time. These are the notes our authors send when the rankings shift, the descriptions land, and the readers start arriving.
      </p>

      <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name + t.bookTitle}
            className="break-inside-avoid rounded-lg border hairline bg-card p-7 shadow-sm"
          >
            <Quote className="h-5 w-5 text-primary/60" />
            <blockquote className="mt-3 font-serif text-lg italic leading-snug text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-primary/20 pt-4">
              <p className="font-serif text-base text-foreground">{t.name}</p>
              <p className="mt-0.5 text-sm italic text-muted-foreground">{t.bookTitle}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.genre}</p>
              <span className="mt-3 inline-block rounded-full border hairline bg-secondary/70 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-foreground/70">
                {t.service}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-20 rounded-lg bg-primary p-12 text-center text-primary-foreground">
        <h2 className="font-serif text-4xl">Your name could be here next.</h2>
        <p className="mt-3 opacity-80">Build a custom package — we reply within a business day.</p>
        <Link
          to="/order"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
        >
          Build your package <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}