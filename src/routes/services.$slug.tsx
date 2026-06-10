import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Plus, CheckCheck } from "lucide-react";
import { getService, SERVICES } from "@/data/services";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { useCart } from "@/context/cart";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    if (!s) return { meta: [{ title: "Service — Marginalia" }] };
    return {
      meta: [
        { title: `${s.name} — Marginalia` },
        { name: "description", content: s.oneLiner },
        { property: "og:title", content: `${s.name} — Marginalia` },
        { property: "og:description", content: s.oneLiner },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-primary hover:underline">
        ← Back to all services
      </Link>
    </div>
  ),
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const { add, has } = useCart();

  const handleAdd = () => {
    add(service.slug);
    toast.success(`${service.shortName} added to your package`);
  };

  const inCart = has(service.slug);
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <header className="border-b hairline bg-secondary/40">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            ← Services
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <ServiceIcon name={service.icon} className="h-6 w-6 text-primary" />
            <p className="text-xs uppercase tracking-[0.22em] text-primary">{service.shortName}</p>
          </div>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl italic text-muted-foreground">{service.tagline}</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="space-y-16 lg:col-span-8">
            <section>
              <h2 className="font-serif text-3xl text-foreground">What it is</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/80">
                {service.whatItIs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-foreground">Why it matters</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/80">
                {service.whyItMatters.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-foreground">What you get</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-md border hairline bg-card p-4 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-foreground">How it works</h2>
              <ol className="mt-6 space-y-px overflow-hidden rounded-lg border hairline">
                {service.process.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[auto_1fr] gap-6 bg-secondary/30 p-6">
                    <span className="font-serif text-2xl text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-serif text-3xl text-foreground">Common questions</h2>
              <Accordion type="single" collapsible className="mt-6">
                {service.faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-serif text-lg">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Pricing sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-lg border hairline bg-card p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">Engagement</p>
                <div className="mt-4 space-y-4">
                  {service.tiers.map((tier) => (
                    <div
                      key={tier.name}
                      className="rounded-md border hairline bg-background p-4"
                    >
                      <p className="font-serif text-lg text-foreground">{tier.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {tier.turnaround}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleAdd}
                  disabled={inCart}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:bg-muted disabled:text-muted-foreground"
                >
                  {inCart ? (
                    <>
                      <CheckCheck className="h-4 w-4" /> In your package
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" /> Add to package
                    </>
                  )}
                </button>
                <Link
                  to="/order"
                  className="mt-2 inline-flex w-full items-center justify-center gap-1 rounded-md border hairline px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  Build your package <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Other services */}
        <section className="mt-24 border-t hairline pt-16">
          <h2 className="font-serif text-3xl text-foreground">Often paired with</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-[oklch(0.88_0.018_75)] sm:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col gap-3 bg-background p-6 hover:bg-secondary/60"
              >
                <ServiceIcon name={s.icon} className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl">{s.shortName}</h3>
                <p className="text-sm text-muted-foreground">{s.oneLiner}</p>
                <span className="mt-2 text-xs uppercase tracking-[0.18em] text-primary opacity-0 group-hover:opacity-100">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}