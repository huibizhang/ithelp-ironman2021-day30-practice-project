// const colors = require('tailwindcss/colors')
const flagger = require('tailwind-flagger')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    flagger
  ],
}