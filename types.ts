import { LucideIcon } from "lucide-react";

export interface Brand {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: LucideIcon;
  gradient: string; // Subtle hover gradient
  imgLoja: string;
}
