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
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	padding-bottom: 1.5rem;
`;

export const StyledCard = styled.div`
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

export const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

export const StyledTreeSearch = styled.div`
	text-align: left;
	font: italic normal normal 14px/20px Arial;
	letter-spacing: 0px;
	color: ${Colors.ligthGray};
	opacity: 1;
`;
