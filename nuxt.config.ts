// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    build: {
        // @ts-ignore
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
        transpile: ['mdi-vue']
    },
    css: ["~/assets/scss/global.scss"],
    tailwind: {
        cssPath: '~/assets/css/global.css'
    },
})
