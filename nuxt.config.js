export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  router: {
    base: '/nuxt-todolist/'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Todolist',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'Content-Type', charset: 'text/html; charset=utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/nuxt-todolist/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-todolist/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/nuxt-todolist/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/nuxt-todolist/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/nuxt-todolist/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/nuxt-todolist/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/nuxt-todolist/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/nuxt-todolist/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/nuxt-todolist/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/nuxt-todolist/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/nuxt-todolist/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/nuxt-todolist/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/nuxt-todolist/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/nuxt-todolist/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/nuxt-todolist/favicon-16x16.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          nav_all: 'ALL',
          nav_todo: 'TODO',
          nav_complete: 'COMPLETE',
          input_placeholder: 'Please enter the todo.',
          delete_confirm_title: 'Are you sure to delete this todo?',
          delete_confirm_check: 'Yes',
          delete_confirm_cancel: 'Cancel',
          no_data: 'No Data'
        },
        zh: {
          nav_all: '全部',
          nav_todo: '待辦事項',
          nav_complete: '已完成',
          input_placeholder: '請輸入要做的事情',
          delete_confirm_title: '確定要刪除這筆資料？',
          delete_confirm_check: '確定',
          delete_confirm_cancel: '取消',
          no_data: '沒有資料'
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null
  }
};
