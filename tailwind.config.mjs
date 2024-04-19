/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	"darkMode": "class",
	theme: {
		extend: {
			backgroundImage: {
				'radial-gradient': 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
			  },
			spacing: {
			  'start-7': '1.35rem', // Añade tu valor personalizado aquí
			},
		  },
	},
	plugins: [],
}
