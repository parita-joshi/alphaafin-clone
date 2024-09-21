/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo'],
      },
      colors: {
        heading: '#2A2C38',
        content: '#585855',
      },
    },
  },
  plugins: [],
}
