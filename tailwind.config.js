// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Ensure it includes all files in the `pages` folder
    "./components/**/*.{js,ts,jsx,tsx}",  // Include your components folder if applicable
    // Add other directories where your HTML/JSX files exist
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
