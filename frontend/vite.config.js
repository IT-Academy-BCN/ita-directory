import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
// import react from "vite-plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgrPlugin from "vite-plugin-svgr";
import {resolve} from "path";
// import shimReactPdf from "vite-plugin-shim-react-pdf";

const path = require("path");

const pathAliasMap = {
	'@/': '/src/',
	'@components/': '/src/components/',
	'@screens/': '/src/screens/',
}

// module.exports = {
// 	jsx: 'reactVite',
// 	plugins: [require('vite-plugin-react')]
// }

// https://vitejs.dev/config/
export default defineConfig({
	// alias: {
	// 	"@": path.resolve(__dirname, "src"),
	// },
	base: "/",
	server: {
		port: 3000,
	},
	publicDir: './public',
	define: {
		"process.env.VITE_NAME": `"${process.env.VITE_NAME}"`,
	},
	resolvers: [
		{
			alias(path) {
				for (const [slug, res] of Object.entries(pathAliasMap)) {
					if (path.startsWith(slug)) {
						return path.replace(slug, res)
					}
				}
			},
		},
	],
	entryPoints: [
		"....src/index.jsx",
	],
	plugins: [
		// …
		react({
			// Use React plugin in all *.jsx and *.tsx files
			include: '**/*.{js,jsx,tsx}',
		}),
		// reactRefresh(),
		// shimReactPdf(),
		svgrPlugin({
			template: path.resolve(__dirname, "./svgr.hbs"),
			templateOptions: {
				title: "SVG",
				width: "100%",
				height: "100%",
			},
		}),
	],
	// This changes the out put dir from dist to build
	// comment this out if that isn't	 relevant for your project
	optimizeDeps: {
		include: ["@vitejs/plugin-react"],
	},
	// root: "src",
	// build: {
	// 	rollupOptions: {
	// 		root: path.resolve(__dirname, "src"),
	// 		plugins: [
	// 			reactRefresh(),
	// 			// shimReactPdf(),
	// 			svgrPlugin({
	// 				template: path.resolve(__dirname, "./svgr.hbs"),
	// 				templateOptions: {
	// 					title: "SVG",
	// 					width: "100%",
	// 					height: "100%",
	// 				},
	// 			}),
	// 		],
	// 	},
	// 	plugins: [
	// 		reactRefresh(),
	// 		react({
	// 			// Use React plugin in all *.jsx and *.tsx files
	// 			include: "**/*.{js, jsx}",
	// 		}),
	// 		// svgrPlugin({
	// 		// 	svgrOptions: {
	// 		// 		icon: true,
	// 		// 		// ...svgr options (https://react-svgr.com/docs/options/)
	// 		// 	},
	// 		// }),
	// 		// shimReactPdf(),
	// 	],
	// }
});
