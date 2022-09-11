import { defineNuxtConfig } from "nuxt";
import { config } from "./themeconfig/config";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["maz-ui/css/main.css"],
  modules: [
    "@nuxt/content",

    "@unocss/nuxt",

    "@vueuse/nuxt",

    //https://supabase.com/docs
    "@nuxtjs/supabase",

    //https://pinia.vuejs.org/
    "@pinia/nuxt",

    //@nuxtjs/color-mode
    "@nuxtjs/color-mode",

    //https://lodash.com/docs/4.17.15
    "nuxt-lodash",
  ],

  build: {
    transpile: ["chart.js", "maz-ui"],
  },

  components: [
    "~/components",
    { path: "node_modules/maz-ui/components", level: 1 },
  ],
  unocss: config,
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
});
