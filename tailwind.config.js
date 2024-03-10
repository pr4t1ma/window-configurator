/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9F6B1D",
        secondary: "#9F2A1D",
        tertiary: "#929F1D",
        "primary-light": "#aF8B3D",
        "secondary-light": "#aF4A3D",
        "tertiary-light": "#a2aF3D",
      },
    },
  },
  plugins: [],
};
