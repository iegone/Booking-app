/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#1adc06",
          DEFAULT: "#0EB300",
          dark: "#0d8506",
        },
        secondary: {
          light: "#f11111",
          DEFAULT: "#DA0B0B",
          dark: "#a70d0d",
        },
        background: {
          light: "#ffffff",
          DEFAULT: "#efefef",
          dark: "#bdbdbd",
        },
        text: {
          DEFAULT: "#ffffff",
          dark: "#989898",
        },
      },
    },
  },
  plugins: [],
};