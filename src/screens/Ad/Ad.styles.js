import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledAd = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* 	justify-content: center; */
`;
export const StyledTitle = styled.div`
	color: ${Colors.darkRed};
	padding-top: 0.5rem;
	padding-bottom: 1.5rem;
	font-weight: bold;
	font-size: 36px;
	text-align: center;
`;

export const StyledUl = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-end;
	flex-wrap: nowrap;
	font-size: 16px;
	padding-right: 1.5rem;
	margin-top: 1rem;
`;

export const StyledText = styled.div`
	font-size: 16px;
	text-align: left;
	line-height: 1.5;
	padding-bottom: 1rem;
`;

export const StyledBottomDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding-bottom: 3rem;
	padding-top: 2rem;
`;
