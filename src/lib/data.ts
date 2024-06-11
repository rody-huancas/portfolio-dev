import BlogIcon      from "@/icons/BlogIcon.astro";
import HomeIcon      from "@/icons/HomeIcon.astro";
import FileIcon      from "@/icons/FileIcon.astro";
import AboutIcon     from "@/icons/AboutIcon.astro";
import GithubIcon    from "@/icons/GithubIcon.astro";
import ContactIcon   from "@/icons/ContactIcon.astro";
import LinkedinIcon  from "@/icons/LinkedinIcon.astro";
import ProjectsIncon from "@/icons/ProjectsIncon.astro";
import type { MenuInteface, SocialMediaInteface } from "@/models/sidebar";

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
    path: "/blog",
    name: "Blog",
    icon: BlogIcon,
  },
  {
    path: "/contact",
    name: "Contacto",
    icon: ContactIcon,
  },
];

export const SOCIAL_MEDIA: SocialMediaInteface[] = [
  {
    path: "https://www.linkedin.com/in/rody-huancas/",
    name: "LinkedIn",
    icon: LinkedinIcon,
  },
  {
    path: "https://github.com/rody-huancas/",
    name: "GitHub",
    icon: GithubIcon,
  },
  {
    path: "https://www.linkedin.com/in/rody-huancas/",
    name: "Descargar CV",
    icon: FileIcon,
  },
];