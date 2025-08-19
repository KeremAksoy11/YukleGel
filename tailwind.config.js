/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFFBE6",
          100: "#FFF3B8",
          200: "#FFE68A",
          300: "#FFD95C",
          400: "#FFCC2E",
          500: "#FFBF00", // Logodaki sarı tonu
          600: "#CC9900",
          700: "#997300",
          800: "#664C00",
          900: "#332600",
        },
        dark: {
          50: "#E6E6E6",
          100: "#B3B3B3",
          200: "#808080",
          300: "#4D4D4D",
          400: "#1A1A1A",
          500: "#000000", // Logodaki siyah tonu
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
