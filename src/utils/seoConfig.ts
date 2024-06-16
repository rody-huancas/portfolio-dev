import type { ManifestOptions } from "vite-plugin-pwa";

// Definir la configuración por defecto para el SEO en la web
export const seoConfig = {
	baseURL: "https://rodyhuancas.vercel.app/",
	description:
		"Portafolio para presentar proyectos y conocerme más. Desarrollado por Rody Huancas",
	type: "website",
	image: {
		url: "/public/icons/favicon-192x192.png",
		alt: "Rody Huancas",
		width: 705,
		height: 606,
	},
	siteName: "Rody Huancas",
	twitter: {
		card: "summary_large_image",
	},
}

// Definir lonfiguración para PWA
export const manifest: Partial<ManifestOptions> = {
  name: "Rody Huancas",
  short_name: "Rody Huancas",
  description: "Portafolio de Rody Huancas",
  theme_color: "#d5ff00",
  background_color: "#d5ff00",
  display: "fullscreen",
  icons: [
    {
      src: "/icons/favicon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/icons/favicon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable",
    },
  ],
};
