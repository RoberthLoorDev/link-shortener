// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
      screens: {
        "2xl": { min: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { min: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { min: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { min: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { min: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { min: "359px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
