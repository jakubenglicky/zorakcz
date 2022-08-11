export default {
    target: 'static',

    head: {
      title: 'ZORRAK - čistá práce',
      htmlAttrs: {
        lang: 'cs'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Jsme realizační firmou staveb poskytující komplexní služby zejména v oblastech stavební a zednické práce, obkladačské práce, zámkové dlažby, realizace oken a dveří, zemní práce, aj.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'},
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css'},
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js', body: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js', body: true },
        { src: '/js/main.js', body: true }
      ]
    },

    css: [
      '~/assets/less/style'
    ],

    modules: [
      '@nuxtjs/google-analytics',
    ],
    googleAnalytics: {
      id: 'G-KTB0KENN42'
    }
  }
  