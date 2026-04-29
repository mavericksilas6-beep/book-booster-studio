import { Search, Feather, LayoutPanelTop, Users, ListOrdered, Image as ImageIcon } from "lucide-react";
import type { Service } from "@/data/services";

const MAP = {
  search: Search,
  feather: Feather,
  layout: LayoutPanelTop,
  users: Users,
  list: ListOrdered,
  image: ImageIcon,
} as const;

export function ServiceIcon({ name, className }: { name: Service["icon"]; className?: string }) {
  const Icon = MAP[name];
  return <Icon className={className} aria-hidden="true" />;
}