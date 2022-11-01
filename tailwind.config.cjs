/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				 "jump-card": {
          "0%, 100%": {
            transform: "translateY(-20px) ",
          },
          "50%": {
            transform: "translateY(-25px) ",
          },
        },
      },
	    animation: {
			"jump-card": 'jump-card 1.5s ease-out infinite',
		},

		},
	},
	plugins: [],
}
