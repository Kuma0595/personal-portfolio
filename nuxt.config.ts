export default defineNuxtConfig({
  compatibilityDate: '2026-10-11',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: { head: { htmlAttrs: { lang: 'zh-CN' }, title: 'Piggy · 前端开发工程师', meta: [{ name: 'description', content: 'Piggy 的个人作品集：Vue、Nuxt、UniApp，与真实业务中的前端实践。' }], link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }] } },
  nitro: { prerender: { crawlLinks: true } }
})
