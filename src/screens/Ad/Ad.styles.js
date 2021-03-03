import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledAd = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 8rem;
`;

export const StyledUl = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	font-size: 7px;
	padding-right: 1.5rem;
`;

export const StyledLi = styled.li`
	list-style: none;
	padding-top: 0.3rem;
	padding-bottom: 0.2rem;
	padding-left: 0.5rem;
	padding-right: 0.7rem;
	display: flex;
	flex-direction: row;
	&:hover {
		color: ${Colors.darkBlue};
	}
`;

export const StyledTitle = styled.div`
	padding-left: 0.1rem;
`;

export const StyledText = styled.div`
	margin-top: 0.5rem;
	margin-left: 7.5rem;
	margin-right: 5rem;
	margin-bottom: 1rem;
	font-size: 8px;
	text-align: left;
	line-height: 1.5;
`;
