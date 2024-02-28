/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				'slide-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-20px)' }
				}
			},
			animation: {
				'slide-right': 'slide-right 0.5s ease-out infinite alternate-reverse both'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			'bumblebee',
			{
				darkbumblebee: {
					...require('daisyui/src/theming/themes')['[data-theme=bumblebee]'],
					neutral: '#2a323c',
					'base-100': '#1d232a'
				}
			}
		],
		darkTheme: 'bumblebee'
	}
};
