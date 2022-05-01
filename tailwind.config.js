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
      width: {
        item: "40vw",
      },
      height: {
        item: "40vh",
      },
      fontFamily: {
        Lodrina: ["Londrina Outline", "cursive"],
        LodrinaSolid: ["Londrina Solid", "cursive"],
        Lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        "7xl": "7rem",
        "5xl": "5rem",
        "3xl": "2.5rem",
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
