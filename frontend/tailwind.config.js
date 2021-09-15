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
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
