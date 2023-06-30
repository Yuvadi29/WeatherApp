/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hot': "url('./assets/hot.jpg')",
        'cold': "url('./assets/cold.png')",
        'rainy': "url('./assets/rainy.png')",
      },
      fontFamily: {
        'changa': ['Changa One']
      }
    },
  },
  plugins: [],
}

