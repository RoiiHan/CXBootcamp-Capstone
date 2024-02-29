/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        donor: "#C92B3C",
        pdg: "#3F3F3F",
        border: "#878787",
      },
      backgroundImage: (theme) => ({
        "custom-gradient":
          "linear-gradient(to left, rgba(141, 42, 52, 1), rgba(140, 41, 51, 0.72), rgba(138, 40, 50, 0.45), rgba(136, 39, 49, 0))",
      }),
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};