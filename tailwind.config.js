/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",

      md: "768px",

      lg: "1440px",
    },
    fontFamily: {
      sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "32px",
      },
    },
    extend: {
      colors: {
        dark: "#121212",
        light: "#F6F6F6",
        gray: "#484848",
        headerBorderDark: "rgba(18, 18, 18, 0.3)",
        headerBorderLight: "rgba(247, 247, 247, 0.2)",
      },
    },
  },
  plugins: [],
};
