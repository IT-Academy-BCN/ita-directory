import styled from "styled-components";

export const StyledDashboard = styled.div`
	display: flex;
	flex-direction: column;
	width: 90vw;
	justify-content: center;

	.marginBottom {
		margin-bottom: 2rem;
	}

	.row {
		display: flex;
		width: 100%;
		flex-flow: row nowrap;
		justify-content: space-between;
		margin-top: 2rem;
		margin-bottom: 5rem;

		@media (max-width: 1025px) {
			display: flex;
			width: 100%;
			justify-content: center;
			flex-direction: column;
		}
	}
	.graphicMargin {
		@media (max-width: 1025px) {
			margin-bottom: 3rem;
			margin-top: 2rem;
			margin-right: 0;
		}
	}
`;
