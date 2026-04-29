import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useCart } from "@/context/cart";
import { SERVICES, getService } from "@/data/services";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Check, Plus, Trash2, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Build Your Package — Marginalia" },
      {
        name: "description",
        content:
          "Pick the services your book needs and submit a no-obligation inquiry. Bundle discounts apply automatically.",
      },
      { property: "og:title", content: "Build Your Package — Marginalia" },
      { property: "og:description", content: "Custom author marketing packages with bundle savings." },
    ],
  }),
  component: OrderPage,
});

const inquirySchema = z.object({
  client_name: z.string().trim().min(2, "Please enter your name").max(100),
  client_email: z.string().trim().email("Please enter a valid email").max(255),
  book_title: z.string().trim().max(200).optional().or(z.literal("")),
  book_genre: z.string().trim().max(100).optional().or(z.literal("")),
  amazon_url: z.string().trim().url("Must be a valid URL").max(500).optional().or(z.literal("")),
  goodreads_url: z.string().trim().url("Must be a valid URL").max(500).optional().or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

function OrderPage() {
  const { items, add, remove, setTier, has, subtotal, bundleDiscount, total, count, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    client_name: "",
    client_email: "",
    book_title: "",
    book_genre: "",
    amazon_url: "",
    goodreads_url: "",
    notes: "",
  });

  const handleField = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    if (count === 0) {
      toast.error("Please add at least one service to your package.");
      return;
    }
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const payload = {
      ...parsed.data,
      book_title: parsed.data.book_title || null,
      book_genre: parsed.data.book_genre || null,
      amazon_url: parsed.data.amazon_url || null,
      goodreads_url: parsed.data.goodreads_url || null,
      notes: parsed.data.notes || null,
      selected_services: items.map((i) => {
        const s = getService(i.slug);
        return { slug: i.slug, name: s?.name ?? i.slug, tier: i.tier, price: i.price };
      }),
      total_estimate: total,
    };
    const { error } = await supabase.from("service_inquiries").insert(payload);
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong submitting your request. Please try again.");
      return;
    }
    setSuccess(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (success) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-32 text-center sm:px-8">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h1 className="mt-6 font-serif text-4xl text-foreground sm:text-5xl">Thank you.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Your inquiry is in. We'll read it carefully and reply within one business day with a confirmed scope, timeline, and quote.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="mb-14 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-primary">Build your package</p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
          Pick what your book needs.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Toggle services on, choose a tier, then tell us about your book. We'll send a confirmed quote within 24 hours — no payment required at this stage.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
        {/* Builder */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const inCart = has(service.slug);
            const item = items.find((i) => i.slug === service.slug);
            return (
              <div
                key={service.slug}
                className={`rounded-lg border bg-card p-6 transition-colors ${
                  inCart ? "border-primary shadow-sm" : "hairline"
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => (inCart ? remove(service.slug) : add(service.slug))}
                    aria-label={inCart ? `Remove ${service.name}` : `Add ${service.name}`}
                    className={`mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border transition-colors ${
                      inCart
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-[oklch(0.78_0.05_75)] bg-background hover:bg-secondary"
                    }`}
                  >
                    {inCart ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4 text-muted-foreground" />}
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <ServiceIcon name={service.icon} className="h-4 w-4 text-primary" />
                      <h3 className="font-serif text-xl text-foreground">{service.name}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{service.oneLiner}</p>
                    {inCart && (
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {service.tiers.map((tier) => {
                          const selected = item?.tier === tier.name;
                          return (
                            <button
                              key={tier.name}
                              onClick={() => setTier(service.slug, tier.name)}
                              className={`rounded-md border p-3 text-left transition-colors ${
                                selected
                                  ? "border-primary bg-primary/5"
                                  : "hairline bg-background hover:bg-secondary/60"
                              }`}
                            >
                              <p className="font-serif text-base text-foreground">{tier.name}</p>
                              <p className="text-xs text-muted-foreground">{tier.turnaround}</p>
                              <p className="mt-1 font-serif text-lg text-primary">${tier.price}</p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  {!inCart && (
                    <p className="hidden shrink-0 text-right text-sm text-muted-foreground sm:block">
                      from <span className="font-serif text-lg text-foreground">${service.startingPrice}</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-lg border hairline bg-card p-8">
            <div>
              <h2 className="font-serif text-3xl text-foreground">Tell us about your book</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                The more specific the better — but don't sweat it, we'll follow up with anything missing.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" required name="client_name" value={form.client_name} onChange={handleField("client_name")} error={errors.client_name} />
              <Field label="Email" required type="email" name="client_email" value={form.client_email} onChange={handleField("client_email")} error={errors.client_email} />
              <Field label="Book title" name="book_title" value={form.book_title} onChange={handleField("book_title")} error={errors.book_title} />
              <Field label="Genre" name="book_genre" placeholder="e.g. Historical fiction" value={form.book_genre} onChange={handleField("book_genre")} error={errors.book_genre} />
              <Field label="Amazon URL" name="amazon_url" placeholder="https://..." value={form.amazon_url} onChange={handleField("amazon_url")} error={errors.amazon_url} />
              <Field label="Goodreads URL" name="goodreads_url" placeholder="https://..." value={form.goodreads_url} onChange={handleField("goodreads_url")} error={errors.goodreads_url} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Anything we should know?</label>
              <textarea
                value={form.notes}
                onChange={handleField("notes")}
                rows={4}
                maxLength={2000}
                placeholder="Deadlines, target reader, what you've already tried, what you're hoping to achieve…"
                className="mt-2 block w-full rounded-md border hairline bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              {errors.notes && <p className="mt-1 text-xs text-destructive">{errors.notes}</p>}
            </div>
            <div className="hidden lg:block">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit inquiry"} <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                You'll receive a confirmation email and a quote within one business day. No payment now.
              </p>
            </div>
          </form>
        </div>

        {/* Sticky summary */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="rounded-lg border hairline bg-secondary/60 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">Your package</p>
            {count === 0 ? (
              <>
                <p className="mt-2 font-serif text-2xl text-foreground">Nothing selected yet</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Toggle the services you'd like included. Stack 2 or more for an automatic discount.
                </p>
              </>
            ) : (
              <>
                <ul className="mt-4 divide-y hairline">
                  {items.map((i) => {
                    const s = getService(i.slug)!;
                    return (
                      <li key={i.slug} className="flex items-start justify-between gap-3 py-3">
                        <div className="min-w-0">
                          <p className="truncate font-serif text-base text-foreground">{s.shortName}</p>
                          <p className="text-xs text-muted-foreground">{i.tier}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-3">
                          <span className="font-serif text-base text-foreground">${i.price}</span>
                          <button
                            onClick={() => remove(i.slug)}
                            aria-label={`Remove ${s.name}`}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 space-y-2 border-t hairline pt-4 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  {bundleDiscount > 0 ? (
                    <div className="flex justify-between text-primary">
                      <span>Bundle savings ({count} services)</span>
                      <span>−${bundleDiscount}</span>
                    </div>
                  ) : (
                    <p className="text-xs italic text-muted-foreground">
                      Add {2 - count} more service{2 - count === 1 ? "" : "s"} for 5% off.
                    </p>
                  )}
                  <div className="flex justify-between border-t hairline pt-3 font-serif text-lg text-foreground">
                    <span>Estimate</span>
                    <span>${total}</span>
                  </div>
                </div>
              </>
            )}
            <button
              type="submit"
              form=""
              onClick={handleSubmit}
              disabled={submitting || count === 0}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 lg:hidden"
            >
              {submitting ? "Submitting…" : "Submit inquiry"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              Estimates only. Final quote confirmed in your reply email — no payment until you approve.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field(props: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={props.name} className="text-sm font-medium text-foreground">
        {props.label}
        {props.required && <span className="ml-0.5 text-primary">*</span>}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type ?? "text"}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={props.required}
        maxLength={500}
        className="mt-2 block w-full rounded-md border hairline bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      {props.error && <p className="mt-1 text-xs text-destructive">{props.error}</p>}
    </div>
  );
}