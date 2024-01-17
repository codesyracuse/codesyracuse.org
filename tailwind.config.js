/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.slate.700"),
            "--tw-prose-links-hover": "#2925C3",
            img: {
              margin: "auto",
            },
            a: {
              color: "var(--tw-prose-links)",
              fontWeight: theme("fontWeight.medium"),
            },
            "a:hover": {
              color: "var(--tw-prose-links-hover)",
              textDecorationColor: "var(--tw-prose-underline-hover)",
            },
          },
        },
      }), // Add a comma here
      colors: {
        brand: "#2982DD",
        "brand-dark": "#2925C3",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
