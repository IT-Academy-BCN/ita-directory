import styled from "styled-components";

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
