// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/google-fonts', 'nuxt-icon'],
	googleFonts: {
		families: {
			'Open Sans': {
				wght: [300, 400, 600, 800],
				ital: [300],
			},
		},
	},
	app: {
		pageTransition: { name: 'page' },
	},
});
