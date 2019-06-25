var tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss('./src/tailwind.js'),
    require('autoprefixer'),
  ]
}