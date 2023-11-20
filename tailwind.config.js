/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray100: "#E1E1E6",
        gray300: "#c4c4cc",  
        gray400: "#8d8d99",
        gray600: "#323238",
        gray700: "#29292e",
        gray800: "#202024",
        gray900: "#121214",
        green400: "#00B37E",
        green500: "#00875f",
      }
    },
  },
  plugins: [],
}

