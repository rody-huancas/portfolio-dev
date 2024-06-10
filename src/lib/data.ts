import AboutIcon from "@/icons/AboutIcon.astro";
import ContactIcon from "@/icons/ContactIcon.astro";
import HomeIcon from "@/icons/HomeIcon.astro";
import ProjectsIncon from "@/icons/ProjectsIncon.astro";
import type { MenuInteface } from "@/models/sidebar";

export const MENU: MenuInteface[] = [
  {
    path: "/",
    name: "Inicio",
    icon: HomeIcon,
  },
  {
    path: "/projects",
    name: "Proyectos",
    icon: ProjectsIncon,
  },
  {
    path: "/about",
    name: "Sobre Mí",
    icon: AboutIcon,
  },
  {
    path: "/contact",
    name: "Contacto",
    icon: ContactIcon,
  },
];
