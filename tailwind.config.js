const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class',
  mode: 'jit',
  theme: {
    extend: {},
    colors: {
      gray: colors.blueGray,
      green: colors.teal,
      red: colors.red,
      blue: colors.sky,
      white: colors.white,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
