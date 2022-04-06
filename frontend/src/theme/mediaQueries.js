// Screen Sizes
export const responsiveSizes = {
	MobileXl: "480px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1280px",
	laptopLg: "1440px",
};

// Device MediaQuery Selectors
export const Device = {
	Mobile: `screen and (min-width: ${responsiveSizes.MobileXl})`,
	Tablet: `screen and (min-width: ${responsiveSizes.tablet})`,
	Laptop: `screen and (min-width: ${responsiveSizes.laptop})`,
	Desktop: `screen and (min-width: ${responsiveSizes.desktop})`,
	LaptopLg: `screen and (min-width: ${responsiveSizes.laptopLg})`,
};
