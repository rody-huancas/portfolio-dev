/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,mdx,svelte,ts,tsx,vue,astro}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-color": "#121212",
        "primary": {
          100: "#ffffff",
          200: "#909090"
        },
        "secondary": "#fca311"
      }
    },
  },
  plugins: [],
}