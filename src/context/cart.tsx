import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { SERVICES, BUNDLES, type Service } from "@/data/services";

export type CartItem = {
  slug: string;
  tier: string;
  price: number;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  add: (slug: string, tier?: string) => void;
  remove: (slug: string) => void;
  setTier: (slug: string, tier: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  has: (slug: string) => boolean;
  applyBundle: (bundleSlug: string) => void;
  activeBundleSlug: string | null;
  count: number;
  subtotal: number;
  bundleDiscount: number;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "marginalia.cart.v2";
const BUNDLE_KEY = "marginalia.bundle.v1";

function priceOf(service: Service, tierName: string) {
  const tier = service.tiers.find((t) => t.name === tierName) ?? service.tiers[0];
  return tier.price;
}

function bundleMatches(items: CartItem[], includes: string[]) {
  if (items.length !== includes.length) return false;
  const set = new Set(items.map((i) => i.slug));
  return includes.every((s) => set.has(s));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [activeBundleSlug, setActiveBundleSlug] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
      const b = typeof window !== "undefined" ? localStorage.getItem(BUNDLE_KEY) : null;
      if (b) setActiveBundleSlug(b);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      if (activeBundleSlug) localStorage.setItem(BUNDLE_KEY, activeBundleSlug);
      else localStorage.removeItem(BUNDLE_KEY);
    } catch {
      // ignore
    }
  }, [items, activeBundleSlug, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const recomputeBundle = (next: CartItem[]) => {
      // If current items exactly match a bundle, keep/set that bundle. Otherwise clear.
      const match = BUNDLES.find((b) => bundleMatches(next, b.includes));
      setActiveBundleSlug(match ? match.slug : null);
    };

    const add = (slug: string, tier?: string) => {
      setItems((prev) => {
        if (prev.some((i) => i.slug === slug)) return prev;
        const service = SERVICES.find((s) => s.slug === slug);
        if (!service) return prev;
        const tierName = tier ?? service.defaultTier;
        const next = [...prev, { slug, tier: tierName, price: priceOf(service, tierName), qty: 1 }];
        recomputeBundle(next);
        return next;
      });
    };
    const remove = (slug: string) =>
      setItems((prev) => {
        const next = prev.filter((i) => i.slug !== slug);
        recomputeBundle(next);
        return next;
      });
    const setTier = (slug: string, tier: string) =>
      setItems((prev) =>
        prev.map((i) => {
          if (i.slug !== slug) return i;
          const service = SERVICES.find((s) => s.slug === slug)!;
          return { ...i, tier, price: priceOf(service, tier) };
        })
      );
    const setQty = (slug: string, qty: number) =>
      setItems((prev) => prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i)));
    const clear = () => {
      setItems([]);
      setActiveBundleSlug(null);
    };
    const has = (slug: string) => items.some((i) => i.slug === slug);

    const applyBundle = (bundleSlug: string) => {
      const b = BUNDLES.find((x) => x.slug === bundleSlug);
      if (!b) return;
      const next: CartItem[] = b.includes
        .map((slug) => SERVICES.find((s) => s.slug === slug))
        .filter((s): s is Service => !!s)
        .map((s) => ({ slug: s.slug, tier: s.defaultTier, price: priceOf(s, s.defaultTier), qty: 1 }));
      setItems(next);
      setActiveBundleSlug(b.slug);
    };

    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const activeBundle = activeBundleSlug ? BUNDLES.find((b) => b.slug === activeBundleSlug) : null;
    const bundleDiscount = activeBundle ? Math.max(0, subtotal - activeBundle.price) : 0;
    const total = activeBundle ? activeBundle.price : subtotal;
    const count = items.length;

    return { items, add, remove, setTier, setQty, clear, has, applyBundle, activeBundleSlug, count, subtotal, bundleDiscount, total };
  }, [items, activeBundleSlug]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
