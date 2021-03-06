export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - SQA\'EXPERT',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Quality needs Sophistication'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.URL || 'http://localhost:3000'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:creator',
        property: 'twitter:creator',
        content: '@sqaexpert'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@/modules/generator'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      icons: {
        solid: ['faUser', 'faCalendar', 'faClock', 'faChevronLeft', 'faChevronRight'],
        brands: ['faLinkedin', 'faGithub', 'faStackOverflow']
      }
    }]
  ],

  sitemap: {
    hostname: 'https://sqa.expert',
    gzip: true,
    exclude: [],
    routes: [],
    defaults: {
      changefreq: 'daily',
      priority: 1
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}

}
