/** @type {import('tailwindcss').Config} */
export default {
  // Esta línea es la MAGIA. Le dice dónde buscar tus archivos .astro
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores de CercaMío
        cercaBlue: '#2196F3',
        cercaOrange: '#FF9800',
      }
    },
  },
  plugins: [
    // Esto es para que la página de "Privacidad" se vea bien
    require('@tailwindcss/typography'),
  ],
}