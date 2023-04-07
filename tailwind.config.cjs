/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
				'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))',
				'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))'
			},
		},
	},
	plugins: [
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
}
			