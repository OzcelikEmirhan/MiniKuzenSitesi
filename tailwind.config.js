/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'burak': "url('./src/assets/BurakProfil.jpeg')",
        'alp': "url('./src/assets/Alp.jpeg')",
      },
      screens: {
        'xs': '300px',
        'sm': '576px',  // Örnek: Small ekranlar
        'md': '768px',  // Örnek: Medium ekranlar
        'lg': '992px',  // Örnek: Large ekranlar
        'xl': '1200px', // Örnek: Extra large ekranlar
      },
    },
  },
  plugins: [],
}

