import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Marginalia Author Marketing" },
      {
        name: "description",
        content:
          "A boutique studio that treats indie books with the polish traditional publishers reserve for their own. Meet the team and read our philosophy.",
      },
      { property: "og:title", content: "About — Marginalia Author Marketing" },
      { property: "og:description", content: "Boutique author marketing for serious indie authors." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-primary">About the studio</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
        We started Marginalia because indie books were being sold like indie books.
      </h1>

      <div className="mt-12 space-y-7 text-lg leading-relaxed text-foreground/85 [&_p:first-letter]:font-serif">
        <p>
          The traditional publishing playbook is mostly invisible to the public. A debut from a major imprint gets a six-figure marketing apparatus — keyword strategy, A+ panels, librarian outreach, Bookstagram seeding, list inclusion. None of it shouts. All of it works.
        </p>
        <p>
          Indie authors get the talent. They get the agency over their work. What they don&rsquo;t get is the apparatus. Most pour themselves into the writing and then upload to KDP with whatever copy they happen to have written that afternoon. Their books deserve better — and so do their readers, who never find them.
        </p>
        <p>
          Marginalia exists to close that gap. We do the same kind of work that an in-house marketing team at a Penguin imprint would do, but we do it for one book at a time. We read your novel. We learn what makes it specifically itself. Then we build the apparatus around it — quietly, carefully, unmistakably premium.
        </p>
        <p>
          We don&rsquo;t sell hype. We don&rsquo;t buy reviews. We don&rsquo;t use bots. We work with authors who care about their books the way we care about our work. If that&rsquo;s you, we&rsquo;d love to hear what you&rsquo;re writing.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border hairline bg-[oklch(0.88_0.018_75)] sm:grid-cols-3">
        {[
          { n: "200+", l: "Books optimized" },
          { n: "94%", l: "Average ranking lift in 60 days" },
          { n: "24h", l: "Inquiry response time" },
        ].map((s) => (
          <div key={s.l} className="bg-secondary/50 p-8 text-center">
            <p className="font-serif text-5xl text-primary">{s.n}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg border hairline bg-secondary/40 p-10 text-center">
        <h2 className="font-serif text-3xl text-foreground">Ready to begin?</h2>
        <p className="mt-3 text-muted-foreground">Build a custom package and we&rsquo;ll reply within a day.</p>
        <Link
          to="/order"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Build your package <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}