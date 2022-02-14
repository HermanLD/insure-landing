module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        sans: ["Karla", "sans-serif"],
      },
      colors: {
        primary: "hsl(216, 30%, 68%)",
        "primary-dark": "hsl(256, 26%, 20%)",
        light: "hsl(0, 0%, 98%)",
        "dark-gray": "hsl(273, 4%, 51%)",
        dark: "hsl(270, 9%, 17%)",
      },
      maxWidth: {
        container: "69.375rem",
      },
      transformOrigin: {
        "top-center": "top center",
      },
      spacing: {
        mobile: "calc(100vh - 5rem)",
      },
      backgroundImage: {
        "mobile-nav": "url('./images/bg-pattern-mobile-nav.svg')",
      },
    },
  },
  plugins: [],
};
