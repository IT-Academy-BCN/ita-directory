const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		boxShadow: {
			"button-shadow": "0px 2px 4px #00000029",
		},
		extend: {
			colors: {
				rose: colors.rose,
				fuchsia: colors.fuchsia,
				indigo: colors.indigo,
				teal: colors.teal,
				lime: colors.lime,
				orange: colors.orange,
				sky: colors.sky,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
