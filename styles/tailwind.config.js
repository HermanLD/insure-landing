module.exports = {
  content: ["_site/**/*.html"],
  safelist: [],
  theme: {
    extend: {
      screens: {
        desktop: "1028px",
      },
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
      gridTemplateColumns: {
        "hero-grid": "repeat(auto-fit, minmax(360px, 1fr))",
        "feat-grid": "repeat(auto-fit, minmax(260px, 1fr))",
        footer: "repeat(auto-fit, minmax(270px, 1fr))",
      },
      spacing: {
        mobile: "calc(100vh - 5rem)",
      },
      backgroundImage: {
        "mobile-nav": "url('./images/bg-pattern-mobile-nav.svg')",
        "mobile-header-right":
          "url('./images/bg-pattern-intro-right-mobile.svg')",
        "mobile-header-left":
          "url('./images/bg-pattern-intro-left-mobile.svg')",
        "desktop-header-right":
          "url('./images/bg-pattern-intro-right-desktop.svg')",
        "desktop-header-left":
          "url('./images/bg-pattern-intro-left-desktop.svg')",
        "mobile-how": "url('./images/bg-pattern-how-we-work-mobile.svg')",
        "desktop-how": "url('./images/bg-pattern-how-we-work-desktop.svg')",
        "mobile-footer": "url('./images/bg-pattern-footer-mobile.svg')",
        "desktop-footer": "url('./images/bg-pattern-footer-desktop.svg')",
      },
    },
  },
  plugins: [],
};
