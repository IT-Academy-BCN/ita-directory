/* EXAMPLE OF USE IN COMPONENT
import {Device, Values} from "../../theme/mediaQueries";
@media ${Device.tablet} {
  ${Values.fontSize14}
  ${Values.width100}
}
*/

/* CHANGED FILES WITH MEDIAQUERIES */
// DONE /components /composed /AdCardList /AdCardList.styles.js
// DONE /components /composed /Card /Card.style.js
// DONE /components /composed /Charts /BarChart /BarGraphic.styles.js
// DONE /components /composed /Charts /LineChart /LineChart.styles.js
// DONE /components /composed /Gallery /Gallery.styles.js
// DONE /components /composed /GlobalFilters /GlobalFilters.styles.js
// DONE /components /composed /SearchBar /SearchBarStyles.js
// DONE /components /layout /Footer /Footer.styles.js
// DONE /components /units /inputNumber /InputNumber.styles.js
// DONE /components /units /Notifications /Notifications.styles.js
// DONE /components /units /SearchButton /SearchButtonStyles.js
// DONE /screens /Ad /Ad.styles.js
// DONE /screens /AdList /AdCard /AdCard.style.js
// DONE /screens /AdList /AdListFilter /AdListFilter.style.js
// DONE /screens /AdList /AdList.style.js
// DONE /screens /CreateNewAd /CreateNewAd.styles.js
// DONE /screens /Dashboard /Dashboard.style.js
// DONE /screens /EditAd /EditAd.styles.js
// DONE /screens /ListaUsuariosAdmins /ListaUsuariosAdmins.styles.js
// DONE /screens /MyBills /Bill.styles.js
// DONE /screens /MyBills /MyBills.styles.js
// DONE /screens /Search /Search.style.js
// DONE /screens /UserFlow /Profile /Profile.styles.js

// Screen Sizes
const responsiveSizes = {
	mobileSmall: "320px",
	mobileMedium: "375px",
	mobileLarge: "425px",
	mobileXLarge: "480px",
	tablet: "768px",
	laptop: "1024px",
	desktop: "1280px",
	laptopLarge: "1440px",
	desktopLarge: "2560px",
};

// TODO Fix and Unify the CUSTOM max and min Device Values looking case by case

// Device MediaQuery Selectors
export const Device = {
	// Standard min-width device selectors
	minMobileSmall: `(min-width: ${responsiveSizes.mobileSmall})`,
	minMobileMedium: `(min-width: ${responsiveSizes.mobileMedium})`,
	minMobileLarge: `(min-width: ${responsiveSizes.mobileLarge})`,
	minMobileXLarge: `screen and (min-width: ${responsiveSizes.mobileXLarge})`,
	minTablet: `screen and (min-width: ${responsiveSizes.tablet})`,
	minLaptop: `screen and (min-width: ${responsiveSizes.laptop})`,
	minDesktop: `screen and (min-width: ${responsiveSizes.desktop})`,
	minLaptopLarge: `screen and (min-width: ${responsiveSizes.laptopLarge})`,
	minDesktopLarge: `screen and (min-width: ${responsiveSizes.desktopLarge})`,

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
	maxMobileSmall: `(max-width: ${responsiveSizes.mobileSmall})`,
	maxMobileMedium: `(max-width: ${responsiveSizes.mobileMedium})`,
	maxMobileLarge: `(max-width: ${responsiveSizes.mobileLarge})`,
	maxMobileXLarge: `screen and (max-width: ${responsiveSizes.mobile})`,
	maxTablet: `screen and (max-width: ${responsiveSizes.tablet})`,
	maxLaptop: `screen and (max-width: ${responsiveSizes.laptop})`,
	maxDesktop: `screen and (max-width: ${responsiveSizes.desktop})`,
	maxLaptopLarge: `screen and (max-width: ${responsiveSizes.laptopLarge})`,
	maxDesktopLarge: `screen and (max-width: ${responsiveSizes.desktopLarge})`,

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

// Generic MediaQuery Values
export const Values = {
	fontSize14: `font-size: 14px;`,
	width100: `width: 100%;`,
};
