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
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				white: "#FFFFFF",
				black: "#000000",
				mainColor: "#FFA500	",
				redColor: "#E12D2D",
				lightBlue: "#46C1F7",
				darkBlue: "#0073E6",
				frenchBlue: "#0077B3",
				lightOrange: "#F76546",
				darkOrange: "#E62900",
				lightGreen: "#6DD364",
				darkGreen: "#249A36",
				darkRed: "#823434",
				grey: "#707070",
				lightGrey: "#999999",
				lightGray: "#B0B0B0",
				strongBlue: "#006BB9",
				extraLightGrey: "D8D8D8",
				extraDarkBlue: "#074C84",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
