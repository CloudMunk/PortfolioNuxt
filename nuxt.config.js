const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bokismoki | Web Developer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600,900&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '~modules/import-tailwind-config'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {
      config.plugins.push(
        new PurgecssPlugin({
          whitelist: ['html', 'body'],
          paths: glob.sync([
            path.join(__dirname, 'components/**/*.vue'),
            path.join(__dirname, 'layouts/**/*.vue'),
            path.join(__dirname, 'pages/**/*.vue'),
            path.join(__dirname, 'plugins/**/*.vue')
          ]),
          extractors: [{
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'vue']
          }]
        })
      )
    }
  }
}
