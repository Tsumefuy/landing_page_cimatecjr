/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08C952",
        secundary: "#160440",
        box: "#808080",
        box_1: "#7B7B7B",
        background: "#f2f2f2"
      }
    },
  },
  plugins: [],
};
