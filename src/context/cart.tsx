import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { SERVICES, type Service } from "@/data/services";

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
  count: number;
  subtotal: number;
  bundleDiscount: number;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "marginalia.cart.v1";

function priceOf(service: Service, tierName: string) {
  const tier = service.tiers.find((t) => t.name === tierName) ?? service.tiers[0];
  return tier.price;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const add = (slug: string, tier?: string) => {
      setItems((prev) => {
        if (prev.some((i) => i.slug === slug)) return prev;
        const service = SERVICES.find((s) => s.slug === slug);
        if (!service) return prev;
        const tierName = tier ?? service.defaultTier;
        return [...prev, { slug, tier: tierName, price: priceOf(service, tierName), qty: 1 }];
      });
    };
    const remove = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug));
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
    const clear = () => setItems([]);
    const has = (slug: string) => items.some((i) => i.slug === slug);

    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    const bundleRate = items.length >= 4 ? 0.15 : items.length >= 3 ? 0.1 : items.length >= 2 ? 0.05 : 0;
    const bundleDiscount = Math.round(subtotal * bundleRate);
    const total = subtotal - bundleDiscount;
    const count = items.length;

    return { items, add, remove, setTier, setQty, clear, has, count, subtotal, bundleDiscount, total };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}