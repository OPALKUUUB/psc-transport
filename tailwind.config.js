/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'carousel-1': "url('/images/carousel/carousel_1.jpg')",
        'carousel-2': "url('/images/carousel/carousel_2.jpg')",
        'carousel-3': "url('/images/carousel/carousel_3.jpg')",
      }
    },
  },
  plugins: [],
}