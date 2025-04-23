/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',   // Include your pages folder
    './components/**/*.{js,ts,jsx,tsx}', // Include your components folder if you have one
    './app/**/*.{js,ts,jsx,tsx}', // Include your app folder if you're using Next.js 13's app directory structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
