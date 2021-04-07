import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledAdList = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledTitle = styled.h3`
	color: ${Colors.redColor};
	text-align: left;
	font: normal normal normal 26px/21px Arial;
	letter-spacing: 0px;
	margin-bottom: 0;
	margin-right: 5rem;
`;

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	padding-bottom: 1.5rem;
	width: 43rem;

	.Mapa {
		width: 100%;
		height: 50vh;
		margin-top: 1rem;

		& > .Container {
			width: 100%;
			height: 100%;
			margin: 0;
		}
	}

	@media only screen and (max-width: 768px) {
		width: 60vw;
	}

	@media only screen and (max-width: 460px) {
		width: 90vw;
	}
`;

export const StyledCard = styled.div`
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

export const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
`;

export const StyledTreeSearch = styled.div`
	text-align: left;
	font: italic normal normal 14px/20px Arial;
	letter-spacing: 0px;
	color: ${Colors.ligthGray};
	opacity: 1;
`;
