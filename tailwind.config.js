/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Krub', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
          "my-Car": "url(./images/car.jpg)",
      },
  },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave"],
  },
}
