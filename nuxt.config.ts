export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  nitro: {
    routeRules: {
      "/**": { isr: false },
    },
  },
  runtimeConfig: {
    openai: {
      apiKey: "",
    },
    TWILIO_ACCOUNT_SID: "",
    TWILIO_AUTH_TOKEN: "",
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "pt-BR",
    },
    strategy: "no_prefix",
    locales: [
      {
        code: "pt-BR",
        name: "Português do Brasil",
        file: "pt-BR.json",
      },
      {
        code: "global",
        name: "Global",
        file: "global.json",
      },
    ],
    lazy: true,
    langDir: "internationalization",
    defaultLocale: "pt-BR",
  },
});
