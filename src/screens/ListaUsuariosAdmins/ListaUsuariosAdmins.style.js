import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	margin: 10px 0px 10px 0px;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid #b0b0b0;
	box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19);
	flex-wrap: nowrap;
	padding-bottom: 0.1rem;
`;

export const StyledImage = styled.img`
	border-radius: 50%;
`;

export const StyledP = styled.p`
	color: ${Colors.extraDarkBlue};
	font-weight: bold;
`;
