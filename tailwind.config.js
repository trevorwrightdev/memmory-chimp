/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
    },
  },
  plugins: [],
}
