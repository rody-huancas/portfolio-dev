import FileIcon from "@/assets/icons/FileIcon.astro";
import HomeIcon from "@/assets/icons/HomeIcon.astro";
import AboutIcon from "@/assets/icons/AboutIcon.astro";
import GithubIcon from "@/assets/icons/GithubIcon.astro";
import ContactIcon from "@/assets/icons/ContactIcon.astro";
import LinkedinIcon from "@/assets/icons/LinkedinIcon.astro";
import ProjectsIncon from "@/assets/icons/ProjectsIcon.astro";
import ExperienceIcon from "@/assets/icons/ExperienceIcon.astro";
import type { ProjectsInteface } from "@/models/project";
import type { MenuInteface, SocialMediaInteface } from "@/models/sidebar";
import type { ExperienceInteface } from "@/models/experience";

export const MENU: MenuInteface[] = [
  {
    path: "/",
    name: "Inicio",
    icon: HomeIcon,
  },
  {
    path: "/experience",
    name: "Experiencia",
    icon: ExperienceIcon,
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
    path: "/pdf/HILDER RODY HUANCAS CHUQUIPOMA.pdf",
    name: "Descargar CV",
    icon: FileIcon,
    isDownload: true,
  },
];

export const EXPERIENCE: ExperienceInteface[] = [
  {
    web: "https://www.datec.pe/",
    company: "Datec Consulting",
    booth: "Desarrollador Full Stack",
    date: "Desde marzo del 2023",
    current: true,
    letter: "",
    description: [
      "Colaboré en el mantenimiento y la incorporación de nuevas funcionalidades a un sistema ERP existente, logrando mejoras en su rendimiento y facilidad de uso, incluyendo la optimización de tiempos de respuesta en consultas.",
      "Trabajé estrechamente con usuarios finales para asegurar que el sistema cumpla sus expectativas, mejorando la satisfacción del usuario.",
      "Colaboré en el desarrollo de una nueva versión del ERP con tecnologías modernas, enfocada en la escalabilidad y eficiencia.",
    ],
  },
];
