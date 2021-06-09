import styled from "styled-components";

export const StyledDashboard = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 80%;
	justify-content: center;

	.row {
		display: flex;
		flex-flow: row nowrap;
		margin-top: 3rem;
		margin-bottom: 5rem;

		@media (max-width: 900px) {
			display: flex;
			width: 100%;
			justify-content: center;
			flex-direction: column;
			padding: 0.5rem 2rem;
		}
	}
	.graphicMargin {
		margin-right: 1.5rem;

		@media (max-width: 900px) {
			margin-bottom: 3rem;
			margin-right: 0;
		}
	}
`;
