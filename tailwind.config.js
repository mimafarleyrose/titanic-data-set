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
      },
      fontSize: {
        "7xl": "7rem",
      },
      backgroundColor: {
        "blue-100": "#16243c",
      },
      colors: {
        "light-pink": "#facde3",
      },
    },
  },
  variants: {},
  plugins: [],
};
