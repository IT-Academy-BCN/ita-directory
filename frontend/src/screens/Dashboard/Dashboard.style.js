import styled from "styled-components";
import {Container} from "theme/GlobalStyles";
import {Device, responsiveSizes} from "../../theme/mediaQueries";

export const DashboardContainer = styled(Container)`
	@media ${Device.maxTablet} {
		max-width: 95%;
	}
	@media screen and (min-width: ${responsiveSizes.mobileXl}) and (max-width: ${responsiveSizes.tablet}) {
		max-width: 85%;
	}
	@media screen and (min-width: ${responsiveSizes.tablet}) and (max-width: ${responsiveSizes.laptopLg}) {
		max-width: 70%;
	}
`;

export const StyledDashboard = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;

	.marginTop {
		margin-bottom: 2rem;
		flex-grow: 1;
	}

	.marginBottom {
		margin-bottom: 2rem;
		flex-grow: 1;
	}
	.marginLeft {
		flex-grow: 1;
		@media ${Device.minLaptopLg} {
			padding-left: 2rem;
		}
	}

	.row {
		display: flex;
		justify-content: space-between;

		@media ${Device.maxMobileXl} {
			display: flex;
			width: 100%;
			flex-direction: column;
		}
		@media ${Device.maxTablet} {
			display: flex;
			width: 100%;
			flex-direction: column;
		}

		@media ${Device.maxLaptopLg} {
			display: flex;
			width: 100%;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	.graphicMargin {
		@media ${Device.maxLaptop} {
			margin-bottom: 3rem;
			margin-top: 2rem;
			margin-right: 0;
		}
	}
`;
