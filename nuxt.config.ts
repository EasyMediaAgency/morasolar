export default defineNuxtConfig({
  compatibilityDate: "2025-03-25",

  modules: [
    "@netlify/nuxt",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  app: {
    head: {
      htmlAttrs: { lang: "hu" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  googleFonts: {
    families: {
      Manrope: [500, 700],
    },
    subsets: ["latin-ext"],
    display: "swap",
    preload: true,
    preconnect: true,
  },

  site: {
    url: "https://morasolar.com",
  },

  sitemap: {
    urls: [
      "/",
      "/napelem",
      "/napelemtisztitas",
      "/villanyszereles",
      "/villamosfelulvizsgalat",
      "/foldmunka",
      "/palyazat",
      "/impresszum",
      "/adatvedelem",
    ],
  },

  robots: {
    allow: "/",
  },

  runtimeConfig: {
    resendApiKey: "",
    emailFrom: "",
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },

  css: ["@fortawesome/fontawesome-free/css/all.min.css"],
});
