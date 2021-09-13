import styled from "styled-components";
import {Container} from "theme/GlobalStyles";
export const DashboardContainer = styled(Container)`
	@media (max-width: 600px) {
		max-width: 95%;
	}
	@media (min-width: 481px) and (max-width: 768px) {
		max-width: 85%;
	}
	@media (min-width: 768px) and (max-width: 1400px) {
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
	}

	.marginBottom {
		margin-bottom: 2rem;
		flex-grow: 1;
	}
	.marginLeft {
		@media (min-width: 1400px) {
			padding-left: 2rem;
		}
		flex-grow: 1;
	}

	.row {
		display: flex;
		justify-content: space-between;

		@media (max-width: 480px) {
			display: flex;
			width: 100%;
			flex-direction: column;
		}
		@media (max-width: 768px) {
			display: flex;
			width: 100%;
			flex-direction: column;
		}

		@media (max-width: 1400px) {
			display: flex;
			width: 100%;
			flex-direction: column;
			justify-content: space-between;
		}
	}

	.graphicMargin {
		@media (max-width: 1030px) {
			margin-bottom: 3rem;
			margin-top: 2rem;
			margin-right: 0;
		}
	}
`;
