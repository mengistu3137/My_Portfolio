/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"], // Include HTML and JavaScript files
  theme: {
    extend: {
      screens: {
        sm: "480px", // Add custom screen size
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"], // Define Nunito font family
    },
  },
  plugins: [],
};
