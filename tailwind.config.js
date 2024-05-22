/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Raleway: "'Playfair Display', serif", // Adds a new `font-Raleway` class
    }},
  },
  plugins: [
    require('daisyui'),
  ],
})

