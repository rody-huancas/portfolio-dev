import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface MenuInteface {
  path: string;
  name: string;
  icon: AstroComponentFactory;
}
