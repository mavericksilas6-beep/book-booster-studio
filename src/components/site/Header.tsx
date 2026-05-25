import { Link } from "@tanstack/react-router";
import { useCart } from "@/context/cart";
import { BookOpen } from "lucide-react";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/results", label: "Results" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[oklch(0.88_0.018_75)] bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <BookOpen className="h-5 w-5 text-primary transition-transform group-hover:-rotate-3" />
          <span className="font-serif text-xl tracking-tight text-foreground">Marginalia</span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Author Marketing
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/order"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90 hover:shadow"
        >
          Build package
          {count > 0 && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-foreground px-1.5 text-[11px] font-semibold text-primary">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}