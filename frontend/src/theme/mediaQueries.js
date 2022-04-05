// EXAMPLE OF USE IN COMPONENT
// import {Device} from "../../theme/mediaQueries";
// @media ${Device.tablet} {}

// Screen Sizes
export const responsiveSizes = {
	mobileXl: "480px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1280px",
	laptopLg: "1440px",
};

// Device MediaQuery Selectors
export const Device = {
	// Standard min-width device selectors
	minMobileXl: `screen and (min-width: ${responsiveSizes.mobileXl})`,
	minTablet: `screen and (min-width: ${responsiveSizes.tablet})`,
	minLaptop: `screen and (min-width: ${responsiveSizes.laptop})`,
	minDesktop: `screen and (min-width: ${responsiveSizes.desktop})`,
	minLaptopLg: `screen and (min-width: ${responsiveSizes.laptopLg})`,

	// Standard max-width device selectors
	maxMobileXl: `screen and (max-width: ${responsiveSizes.mobileXl})`,
	maxTablet: `screen and (max-width: ${responsiveSizes.tablet})`,
	maxLaptop: `screen and (max-width: ${responsiveSizes.laptop})`,
	maxDesktop: `screen and (max-width: ${responsiveSizes.desktop})`,
	maxLaptopLg: `screen and (max-width: ${responsiveSizes.laptopLg})`,
};
