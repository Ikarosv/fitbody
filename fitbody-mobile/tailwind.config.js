/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      default: ["Poppins, sans-serif"],
      sans: ["Poppins, sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      poppinsBold: ["Poppins Bold", "sans-serif"],
      leagueSpartan: ['"League Spartan"', "sans-serif"],
      leagueSpartanMedium: ['"League Spartan Medium"', "sans-serif"],
      leagueSpartanBold: ['"League Spartan Bold"', "sans-serif"],
      leagueSpartanThin: ['"League Spartan Thin"', "sans-serif"],
    },
    extend: {
      colors: {
        darkGray: "#232323",
        primary: "#E2F163",
        secondary: "#896CFE",
        tertiary: "#B3A0FF",
        onPrimary: "#232323",
        onSecondary: "#FFFFFF",
        onTertiary: "#FFFFFF",
        background: "#232323",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.592rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
