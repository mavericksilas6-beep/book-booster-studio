import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[oklch(0.88_0.018_75)] bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-foreground">Marginalia</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Marketing built for the books traditional publishers overlook. Boutique services for serious indie authors.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-foreground"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Studio</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/results" className="hover:text-foreground">Results</Link></li>
            <li><Link to="/order" className="hover:text-foreground">Build a package</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">Get in touch</p>
          <p className="mt-4 text-sm text-muted-foreground">hello@marginalia.studio</p>
          <p className="mt-1 text-sm text-muted-foreground">Replies within 24 hours, Mon–Fri.</p>
        </div>
      </div>
      <div className="border-t border-[oklch(0.88_0.018_75)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <p>© {new Date().getFullYear()} Marginalia Studio. Made for authors who take their books seriously.</p>
          <p>Independent. Boutique. Honest.</p>
        </div>
      </div>
    </footer>
  );
}