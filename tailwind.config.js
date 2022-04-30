module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        "accent-1": "#333",
      },
      fontFamily: {
        Lodrina: ["Londrina Outline", "cursive"],
        Lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        "7xl": "7rem",
      },
      backgroundColor: {
        dark: "#d4e8f7",
        light: "#16243c",
      },
      colors: {
        light: "#facde3",
        dark: "#F49AC7",
      },
    },
  },
  variants: {},
  plugins: [],
};
