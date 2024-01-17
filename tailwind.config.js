/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              margin: "auto",
            },
          },
        },
      },
      colors: {
        brand: "#2982DD",
        "brand-dark": "#2925C3",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
