export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Комплексный поставщик IT оборудования',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Мы поможем оптимизировать Вашу инфраструктуру, снизить расходы на IT обслуживание и гарантировать бесперебойную работу.' },
      { name: 'yandex-verification', content: '6082beb2669fc399' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
    script: [
      {
        hid: 'stripe',
        src: '//script.marquiz.ru/v2.js',
        defer: true,
        callback: () => ({
          host: '//quiz.marquiz.ru',
          id: '604a44803022310044369202',
          autoOpen: 5,
          autoOpenFreq: 'once',
          openOnExit: true,
          disableOnMobile: false
        })
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/icon/all.css',
    '@/assets/css/site.styl'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueAwesomeSwiper.ts', ssr: true },
    { src: '~/plugins/mask.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '74588473',
        webvisor: false,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      },
    ],
  ],

  strapi: {
    entities: ['catalogs', 'categoris', 'clients', 'remomendacis', 'brends'],
    url: 'https://api.qlc-it.ru'
  },

  router: {
    linkActiveClass: '',
    linkExactActiveClass: 'active',
  },

  loading: {
    color: '#FFB637',
    failedColor: 'red',
    height: '3px',
    throttle: 200,
    duration: 5000,
    continuous: false,
    css: true,
    rtl: false
  },

  server: {
    host: '0.0.0.0',
  }
}
