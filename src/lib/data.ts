import BlogIcon from "@/assets/icons/BlogIcon.astro";
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
    isDownload: true
  },
];

export const PROJECTS: ProjectsInteface[] = [
  {
    id: "1",
    url: "https://app-datec-erp.netlify.app/",
    name: "ERP Datec",
    slug: [ "JavaScript", "TypeScript", "React", "Zustand", "React Hook Form", "Tailwind", "NestJS", "TypeORM", "PostgreSQL", "Docker" ],
    image: "/images/erp-datec.webp",
    github: "",
    category: "Software",
    description:
      "La nueva versión del sistema ERP Datec optimiza y automatiza procesos empresariales con módulos de gestión de inventarios, contabilidad, recursos humanos, ventas y compras. Utiliza tecnologías modernas. Esta versión ofrece mejoras significativas en funcionalidad, usabilidad y escalabilidad, convirtiéndose en una herramienta esencial para la gestión empresarial moderna.",
  },
  {
    id: "2",
    url: "https://alvarorenteria.000webhostapp.com/ProyectoClinica_ci/inicio/",
    name: "Enfoque Salud - Sistema a Medida",
    slug: ["JavaScript", "React", "Redux Toolkit", "Tailwind"],
    image: "/images/enfoque-salud.webp",
    github: "https://github.com/rody-huancas/clinica-ci/",
    category: "Software",
    description:
      "Enfoque Salud es un sistema integral diseñado para gestionar el control de pacientes, doctores, personal, productos, ventas e historias clínicas. Con una interfaz intuitiva y fácil de usar, este sistema facilita la administración de clínicas y centros de salud, optimizando el manejo de información y mejorando la eficiencia operativa. Además, permite mantener un registro detallado y seguro de los datos médicos, asegurando un seguimiento adecuado de cada paciente.",
  },
  {
    id: "3",
    url: "https://tinttrail.netlify.app/",
    name: "TintTrail - Paleta de Colores",
    slug: ["JavaScript", "TypeScript", "React", "Tailwind"],
    image: "/images/tinttrail.webp",
    github: "https://github.com/rody-huancas/TintTrail-app",
    category: "Herramientas de Diseño",
    description:
      "TintTrail es una herramienta web diseñada para facilitar la selección de colores y la generación de paletas personalizadas. Al elegir un color, TintTrail crea automáticamente una paleta que se muestra en varios componentes de UI. Además, puedes subir imágenes para extraer colores directamente de ellas, permitiéndote crear combinaciones de colores que complementen tus imágenes.",
  },
  {
    id: "4",
    url: "https://rody-trailflix-react.netlify.app/",
    name: "TraiFlix - Trailers de Películas",
    slug: ["JavaScript", "React", "Redux Toolkit", "Tailwind"],
    image: "/images/trailflix.webp",
    github: "https://github.com/rody-huancas/PAF-react-redux-tmdb/",
    category: "Entretenimiento",
    description:
      "Es una aplicación que te permite ver los últimos trailers de películas y guardar tus favoritos. Ideal para cinéfilos, TraiFlix ofrece una experiencia sencilla y visual para descubrir nuevas películas y mantener una lista personalizada de los trailers que más te interesan",
  },
];

export const EXPERIENCE: ExperienceInteface[] = [
  {
    web: "https://www.datec.pe/",
    company: "Datec Consulting",
    booth: "Desarrollador Full Stack",
    date: "Desde marzo del 2023",
    current: true,
    letter: "/mi_carta.pdf",
    description: [
      "Colaboré en el mantenimiento y la incorporación de nuevas funcionalidades a un sistema ERP existente, logrando mejoras en su rendimiento y facilidad de uso, incluyendo la optimización de tiempos de respuesta en consultas.",
      "Trabajé estrechamente con usuarios finales para asegurar que el sistema cumpla sus expectativas, mejorando la satisfacción del usuario.",
      "Colaboré en el desarrollo de una nueva versión del ERP con tecnologías modernas, enfocada en la escalabilidad y eficiencia.",
    ],
  },
];
