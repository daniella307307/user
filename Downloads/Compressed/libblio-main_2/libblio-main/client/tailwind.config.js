/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a3041",
        secondary: "#1a3041f2",
        whitishGreen: "#afdfba99",
        lightGreen: "#67da80",
        moderateBlue: "#35779e",
        modDarkBlue: "#313f51",
        lightRed: "#f26363",
        darkGray: "#9ba3a9",
        moderateGray: "#d9d9d9",
        veryDarkGray: "#7b7b7b",
        veryLightGray: "#d9d9d933",
        moderateGreen: "#06be7c",
        veryLightRed: "#fc6d64",
        orange: "#f16f52",
        moderateOrange: "#f26363",
        darkGreen: "#25635f",
        darkYellow: "#f79400",
        lightDarkBlue: "#2b4ab9",
        lightblack: "#080808",
        black: "#020202",
        white: "#ffffffe5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
    screens: {
      xs: { max: "480px" },
      xsss: { max: "548px" },
      ss: { max: "620px" },
      sm: { max: "800px" },
      mdsm: { max: "1000px" },
      md: { max: "1060px" },
      lg: { max: "1200px" },
      xl: { max: "1700px" },
    },
  },
  plugins: [],
};
