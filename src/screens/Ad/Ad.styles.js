import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledAd = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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
	align-items: space-between;
	justify-content: space-between;
	flex-wrap: wrap;
	font-size: 16px;
	padding-right: 1.5rem;
	margin-top: 1rem;
`;

export const StyledText = styled.div`
	font-size: 16px;
	text-align: left;
	line-height: 1.5;
	padding-bottom: 1rem;
	width: 95%;
	margin-left: 6%;
`;

export const StyledBottomDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	padding-bottom: 3rem;
	padding-top: 2rem;
	margin-left: 24%;
	margin-top: 3%;
`;
export const SyledButton = styled.button`
	margin: 0;
	padding: 0;
`;

export const StyledStreet = styled.p`
	font-style: italic;
	text-decoration: underline;
	margin-left: 6%;
`;

export const StyledItems = styled.li`
	border: solid 1px black;
	list-style: none;
`;
