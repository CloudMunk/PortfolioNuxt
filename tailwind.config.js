/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'main-pink': '#e31b6d',
        'main-blue': '#04c2c9',
        'main-dark': '#252934',
        'main-darker': '#1b242f',
        'main-darkest': '#1a242c'
      },
      height: {
        '28': '7rem'
      }
    }
  },
  variants: {},
  plugins: [
    // require('tailwindcss-transitions')()
  ]
}
