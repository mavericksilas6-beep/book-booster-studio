import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Sparkles, Target, BadgeCheck } from "lucide-react";
import { SERVICES, BUNDLES, getService } from "@/data/services";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { FEATURED_TESTIMONIALS } from "@/data/testimonials";
import { Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marginalia — Marketing for Books Traditional Publishers Overlook" },
      {
        name: "description",
        content:
          "Boutique Amazon SEO, A+ Content, Goodreads optimization, and discoverability services for indie authors who take their books seriously.",
      },
      { property: "og:title", content: "Marginalia — Marketing for Books Traditional Publishers Overlook" },
      {
        property: "og:description",
        content:
          "Boutique services that treat indie books with the polish traditional publishers reserve for their own.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paper-texture absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-primary">
                <span className="h-px w-8 bg-primary" /> Boutique author marketing
              </p>
              <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                Marketing built for the books{" "}
                <em className="text-primary">traditional publishers</em> overlook.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Amazon SEO, A+ Content, Goodreads optimization, Listopia campaigns, and Instagram graphics — all crafted with the patience and polish a Penguin imprint would give its own debut. Pick the services you need. We'll do the rest.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/order"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow-md"
                >
                  Build your package <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-md border border-[oklch(0.78_0.05_75)] bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
                >
                  See all services
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <figure className="border-l-2 border-primary/40 pl-6">
                <Quote className="h-6 w-6 text-primary/60" />
                <blockquote className="mt-3 font-serif text-xl italic leading-snug text-foreground">
                  &ldquo;They treated my novel like it deserved to be on a Waterstones table. Sales tripled in a quarter.&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  — Helena Bauer, author of <em>The Long Inheritance</em>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y hairline bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-6 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
          <span>Amazon KDP</span>
          <span className="opacity-30">·</span>
          <span>Goodreads</span>
          <span className="opacity-30">·</span>
          <span>BookBub</span>
          <span className="opacity-30">·</span>
          <span>Reedsy</span>
          <span className="opacity-30">·</span>
          <span>NetGalley</span>
          <span className="opacity-30">·</span>
          <span>IngramSpark</span>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Six services</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              Each one fixes a specific leak in your book&rsquo;s sales funnel.
            </h2>
          </div>
          <Link
            to="/services"
            className="hidden shrink-0 text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg bg-[oklch(0.88_0.018_75)] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-secondary/60"
            >
              <ServiceIcon name={service.icon} className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-2xl text-foreground">{service.shortName}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.oneLiner}</p>
              <div className="mt-auto flex items-center justify-end pt-4 text-xs uppercase tracking-[0.18em]">
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Curated bundles */}
      <section className="border-y hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Curated packages</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
              Three ways to launch — ordered by impact.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Stack the services that work hardest together. Three curated combinations, each designed around a different launch shape.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {BUNDLES.map((b) => (
              <div
                key={b.slug}
                className={`relative flex flex-col rounded-lg border bg-card p-7 ${
                  b.highlight ? "border-primary shadow-md ring-1 ring-primary/30" : "hairline"
                }`}
              >
                {b.highlight && (
                  <span className="absolute -top-2.5 left-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground">
                    <Sparkles className="h-3 w-3" /> Most popular
                  </span>
                )}
                <h3 className="font-serif text-2xl text-foreground">{b.name}</h3>
                <p className="mt-1 text-sm italic text-muted-foreground">{b.tagline}</p>
                <ul className="mt-5 space-y-1.5">
                  {b.includes.map((slug) => {
                    const s = getService(slug);
                    return (
                      <li key={slug} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{s?.shortName ?? slug}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{b.why}</p>
                <Link
                  to="/order"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Choose {b.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-primary">Why authors choose us</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
            Discoverability, conversion, credibility — in that order.
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {[
              { icon: Target, title: "Discoverability", body: "We make sure the right readers can find your book on Amazon, Goodreads, and Google — not just the readers who already know your name." },
              { icon: Sparkles, title: "Conversion", body: "Once they find your page, descriptions, A+ panels, and graphics turn browsers into buyers." },
              { icon: BadgeCheck, title: "Credibility", body: "Every touchpoint is polished to the standard a major publisher would demand. Indie shouldn't feel amateur." },
            ].map((p) => (
              <div key={p.title} className="border-t border-primary/30 pt-6">
                <p.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-serif text-2xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="border-y hairline bg-background">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Voices</p>
              <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
                What authors say after the work is done.
              </h2>
            </div>
            <Link
              to="/testimonials"
              className="hidden shrink-0 text-sm font-medium text-primary hover:underline sm:inline-flex sm:items-center sm:gap-1"
            >
              All testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {FEATURED_TESTIMONIALS.map((t) => (
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
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Working together</p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">A quiet, careful process.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              No bloated calls. No agency theatrics. Just thoughtful work delivered on time, with revisions baked in.
            </p>
          </div>
          <ol className="lg:col-span-8 space-y-px overflow-hidden rounded-lg border hairline">
            {[
              ["01", "Order", "Pick the services your book needs — à la carte, with bundle savings if you stack."],
              ["02", "Onboarding", "A short questionnaire and we read your book. No 60-minute kickoff calls."],
              ["03", "Delivery", "Each service ships on its own timeline. You see drafts, not invoices."],
              ["04", "Revisions", "Two free revision rounds per service. We don't stop until you're proud of it."],
            ].map(([num, title, body]) => (
              <li key={num} className="grid grid-cols-[auto_1fr] gap-6 bg-secondary/40 p-7">
                <span className="font-serif text-3xl text-primary">{num}</span>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t hairline bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Your book deserves a marketing campaign as careful as the writing.
            </h2>
            <p className="mt-4 text-base opacity-80">
              Build a custom package. Get a quote in your inbox within one business day.
            </p>
          </div>
          <Link
            to="/order"
            className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Build your package <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}