/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#031326',
          navy: '#071e3d',
          blue: '#0084d1',
          cyan: '#00b4d8',
          accent: '#0ea5e9'
        }
      }
    },
  },
  plugins: [],
}