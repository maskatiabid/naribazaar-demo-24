/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Include the `app` folder
    "./components/**/*.{js,ts,jsx,tsx}",  // Include the `components` folder
    // Add other directories where your HTML/JSX files exist if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
