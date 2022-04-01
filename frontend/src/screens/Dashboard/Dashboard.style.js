import styled from "styled-components";
import {Container} from "theme/GlobalStyles";
import {Device} from "../../theme/mediaQueries";

export const DashboardContainer = styled(Container)`
	@media ${Device.max600} {
		max-width: 95%;
	}
	@media ${Device.between481and768} {
		max-width: 85%;
	}
	@media ${Device.between768and1400} {
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
		@media ${Device.min1400} {
			padding-left: 2rem;
		}
	}

	.row {
		display: flex;
		justify-content: space-between;

		@media ${Device.maxMobileXLarge} {
			display: flex;
			width: 100%;
			flex-direction: column;
		}
		@media ${Device.maxTablet} {
			display: flex;
			width: 100%;
			flex-direction: column;
		}

		@media ${Device.max1400} {
			display: flex;
			width: 100%;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	.graphicMargin {
		@media ${Device.max1030} {
			margin-bottom: 3rem;
			margin-top: 2rem;
			margin-right: 0;
		}
	}
`;
