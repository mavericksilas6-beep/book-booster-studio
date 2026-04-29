import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Plus, CheckCheck } from "lucide-react";
import { SERVICES } from "@/data/services";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { useCart } from "@/context/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Marginalia Author Marketing" },
      {
        name: "description",
        content:
          "Six boutique services for indie authors: Amazon SEO, description rewrites, A+ content, Goodreads optimization, Listopia campaigns, and Instagram graphics.",
      },
      { property: "og:title", content: "Services — Marginalia Author Marketing" },
      {
        property: "og:description",
        content:
          "Pick the services your book needs. Build a custom package with bundle savings.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { add, has, count, total, subtotal, bundleDiscount } = useCart();

  const handleAdd = (slug: string, name: string) => {
    add(slug);
    toast.success(`${name} added to your package`);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="mb-16 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Services</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
          Six services. Pick what your book needs.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Each service stands alone, but they multiply when stacked. Add 2 services for 5% off, 3 for 10%, 4 or more for 15%.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          {SERVICES.map((service) => {
            const inCart = has(service.slug);
            return (
              <article
                key={service.slug}
                className="group rounded-lg border hairline bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <ServiceIcon name={service.icon} className="h-5 w-5 text-primary" />
                      <h2 className="font-serif text-3xl text-foreground">{service.name}</h2>
                    </div>
                    <p className="mt-2 text-base italic text-muted-foreground">{service.tagline}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80">
                      {service.oneLiner}
                    </p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.deliverables.slice(0, 4).map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full shrink-0 sm:w-auto sm:text-right">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">From</p>
                    <p className="font-serif text-3xl text-foreground">${service.startingPrice}</p>
                    <p className="text-xs text-muted-foreground">{service.tiers[0].turnaround}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t hairline pt-5">
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Full details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="flex-1" />
                  <button
                    onClick={() => handleAdd(service.slug, service.shortName)}
                    disabled={inCart}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 disabled:bg-muted disabled:text-muted-foreground"
                  >
                    {inCart ? (
                      <>
                        <CheckCheck className="h-4 w-4" /> Added
                      </>
                    ) : (
                      <>
                        <Plus className="h-4 w-4" /> Add to package
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="lg:sticky lg:top-24 self-start">
          <div className="rounded-lg border hairline bg-secondary/60 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Your package</p>
            <p className="mt-2 font-serif text-2xl text-foreground">
              {count === 0 ? "Empty for now" : `${count} ${count === 1 ? "service" : "services"}`}
            </p>
            {count === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">
                Add services as you read. Bundle discounts apply automatically.
              </p>
            ) : (
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Bundle savings</span>
                    <span>−${bundleDiscount}</span>
                  </div>
                )}
                <div className="flex justify-between border-t hairline pt-2 font-serif text-lg text-foreground">
                  <span>Estimate</span>
                  <span>${total}</span>
                </div>
              </div>
            )}
            <Link
              to="/order"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              {count === 0 ? "Start a package" : "Review & submit"} <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              You're submitting an inquiry — no payment yet. We confirm scope and send a quote within 24 hours.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}