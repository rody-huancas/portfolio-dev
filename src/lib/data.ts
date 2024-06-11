
import BlogIcon      from "@/assets/icons/BlogIcon.astro";
import FileIcon      from "@/assets/icons/FileIcon.astro";
import HomeIcon      from "@/assets/icons/HomeIcon.astro";
import AboutIcon     from "@/assets/icons/AboutIcon.astro";
import GithubIcon    from "@/assets/icons/GithubIcon.astro";
import ContactIcon   from "@/assets/icons/ContactIcon.astro";
import LinkedinIcon  from "@/assets/icons/LinkedinIcon.astro";
import ProjectsIncon from "@/assets/icons/ProjectsIncon.astro";
import type { ProjectsInteface } from "@/models/project";
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

export const PROJECTS: ProjectsInteface[] = [
  {
    url   : "https://tinttrail.netlify.app/",
    name  : "TintTrail",
    slug  : ["JavaScript", "TypeScript", "React", "Tailwind"],
    image : "/images/projects/tinttrail.webp",
    github: "https://github.com/rody-huancas/TintTrail-app",
  }
]