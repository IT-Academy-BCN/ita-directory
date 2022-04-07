import styled from "styled-components";
import {Container} from "theme/GlobalStyles";
import {Device, responsiveSizes} from "../../theme/mediaQueries";

export const DashboardContainer = styled(Container)`
	max-width: 90%;

	@media ${Device.Tablet} {
		max-width: 80%;
	}
	@media ${Device.Laptop} {
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
		@media ${Device.LaptopLg} {
			padding-left: 2rem;
		}
	}

	.row {
		display: flex;
		justify-content: space-between;
		width: 100%;
		flex-direction: column;

		@media ${Device.Tablet} {
			width: 100%;
			flex-direction: row;
		}
		@media ${Device.Laptop} {
			justify-content: space-between;
		}
	}

	.graphicMargin {
		margin-bottom: 3rem;
		margin-top: 2rem;
		margin-right: 0;
	}
`;
