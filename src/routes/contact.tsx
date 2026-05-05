import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Marginalia" },
      { name: "description", content: "Get in touch with Marginalia. Replies within one business day, Mon–Fri." },
      { property: "og:title", content: "Contact — Marginalia" },
      { property: "og:description", content: "Replies within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const f: Record<string, string> = {};
      for (const i of parsed.error.issues) if (i.path[0]) f[i.path[0] as string] = i.message;
      setErrors(f);
      return;
    }
    setSubmitting(true);
    const payload = {
      client_name: parsed.data.name,
      client_email: parsed.data.email,
      notes: parsed.data.message,
      selected_services: [] as Array<Record<string, unknown>>,
      total_estimate: 0,
      status: "contact",
    };
    const { error } = await supabase.from("service_inquiries").insert([payload]);
    if (error) {
      setSubmitting(false);
      toast.error("Something went wrong. Please try again.");
      return;
    }
    try {
      await fetch("/api/notify-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // best-effort
    }
    setSubmitting(false);
    setSuccess(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-primary">Contact</p>
      <h1 className="mt-3 font-serif text-5xl leading-tight text-foreground sm:text-6xl">
        Tell us about your book.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Not sure which services you need? Send a note. We'll read it carefully and reply within one business day with a recommendation.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_280px]">
        <div className="rounded-lg border hairline bg-card p-8">
          {success ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-5 font-serif text-3xl">Message received.</h2>
              <p className="mt-3 text-muted-foreground">We'll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium">Your name<span className="ml-0.5 text-primary">*</span></label>
                <input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  maxLength={100}
                  className="mt-2 block w-full rounded-md border hairline bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Email<span className="ml-0.5 text-primary">*</span></label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                  maxLength={255}
                  className="mt-2 block w-full rounded-md border hairline bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Message<span className="ml-0.5 text-primary">*</span></label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                  maxLength={2000}
                  placeholder="Tell us about your book and what you're hoping for."
                  className="mt-2 block w-full rounded-md border hairline bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border hairline bg-secondary/50 p-6">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="mailto:mavericksilas6@gmail.com"
              className="mt-3 block font-serif text-lg hover:text-primary"
            >
              mavericksilas6@gmail.com
            </a>
            <p className="mt-1 text-sm text-muted-foreground">For anything that doesn't fit a form.</p>
          </div>
          <div className="rounded-lg border hairline bg-secondary/50 p-6">
            <Clock className="h-5 w-5 text-primary" />
            <p className="mt-3 font-serif text-lg">Within 24 hours</p>
            <p className="mt-1 text-sm text-muted-foreground">Mon–Fri. Often much faster.</p>
          </div>
          <div className="rounded-lg border hairline bg-secondary/50 p-6">
            <p className="font-serif text-lg">Already know what you need?</p>
            <Link to="/order" className="mt-2 inline-flex text-sm font-medium text-primary hover:underline">
              Build a custom package →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}