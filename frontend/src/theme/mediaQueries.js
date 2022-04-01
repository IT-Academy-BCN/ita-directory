// EXAMPLE OF USE IN COMPONENT
// import {Device} from "../../theme/mediaQueries";
// @media ${Device.tablet} {}

// Screen Sizes
const responsiveSizes = {
	mobileXl: "480px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1280px",
	laptopLg: "1440px",
};

// TODO Fix and Unify the CUSTOM max and min Device Values looking case by case

// Device MediaQuery Selectors
export const Device = {
	// Standard min-width device selectors
	minMobileXl: `screen and (min-width: ${responsiveSizes.mobileXl})`,
	minTablet: `screen and (min-width: ${responsiveSizes.tablet})`,
	minLaptop: `screen and (min-width: ${responsiveSizes.laptop})`,
	minDesktop: `screen and (min-width: ${responsiveSizes.desktop})`,
	minLaptopLg: `screen and (min-width: ${responsiveSizes.laptopLg})`,

	// Custom min-width selectors
	min600: `screen and (min-width: 600px)`,
	min640: `screen and (min-width: 640px)`,
	min692: `screen and (min-width: '692px')`,
	min893: `screen and (min-width: '893px')`,
	min931: `screen and (min-width: '931px')`,
	min991: `screen and (min-width: '991px')`,
	min1019: `screen and (min-width: '1019px')`,
	min1020: `screen and (min-width: '1020px')`,
	min1400: `screen and (min-width: '1400px')`,
	min1536: `screen and (min-width: '1536px')`,

	// Standard max-width device selectors
	maxMobileXl: `screen and (max-width: ${responsiveSizes.mobileXl})`,
	maxTablet: `screen and (max-width: ${responsiveSizes.tablet})`,
	maxLaptop: `screen and (max-width: ${responsiveSizes.laptop})`,
	maxDesktop: `screen and (max-width: ${responsiveSizes.desktop})`,
	maxLaptopLg: `screen and (max-width: ${responsiveSizes.laptopLg})`,

	// Custom max-width selectors
	max450: `screen and (max-width: '450px')`,
	max468: `screen and (max-width: '468px')`,
	max600: `screen and (max-width: '600px')`,
	max650: `screen and (max-width: '650px')`,
	max692: `screen and (max-width: '692px')`,
	max893: `screen and (max-width: '893px')`,
	max1019: `screen and (max-width: '1019px')`,
	max1020: `screen and (max-width: '1020px')`,
	max1030: `screen and (max-width: '1030px')`,
	max1040: `screen and (max-width: '1040px')`,
	max1400: `screen and (max-width: '1400px')`,

	// Custom min-to-max-width selectors
	between481and768: `screen and (min-width: 481px) and (max-width: 768px)`,
	between768and1024: `screen and (min-width: 768px) and (max-width: 1024px)`,
	between768and1400: `screen and (min-width: 768px) and (max-width: 1400px)`,
};
