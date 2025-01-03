/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.md", "./layouts/**/*.html", "./static/**/*.js", "./data/**/*.yaml"],
  theme: {
    extend: {
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"],
        "lato": ["Lato", "sans-serif"],
      }
    },
  },
  plugins: [],
}

