/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#02191d", // Replace with the exact hex code
      },
      backgroundImage: {
        "gradient-dark": "radial-gradient(circle, #0F2233, #081828)", // Custom gradient
      },
    },
  },
  plugins: [],
};
