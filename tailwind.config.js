/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#000"
      },
      backgroundImage: {
        hero: "url('/man.jpg')"
      },
    },
  },
  plugins: [],
}

