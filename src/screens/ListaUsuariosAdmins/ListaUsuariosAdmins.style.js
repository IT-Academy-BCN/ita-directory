import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	margin: 20px 0px;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid #b0b0b0;
	box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19);
	flex-wrap: nowrap;
	padding: 0.1rem;
`;

export const StyledSpan = styled.span`
	color: ${(props) =>
		props.colorIcono === "rejected"
			? Colors.redColor
			: props.colorIcono === "aprobado"
			? Colors.darkGreen
			: Colors.grey};
	padding-left: ${(props) => props.paddingL};
`;

export const StyledImage = styled.img`
	border-radius: 50%;
`;

export const StyledDiv = styled.div`
	padding: 10px 5px;
`;

export const StyledP = styled.p`
	color: ${(props) => props.color};
	font-weight: bold;
	padding-left: ${(props) => props.paddingL};
`;

export const StyledP2 = styled.p`
	color: ${(props) => props.color};
	font-weight: bold;
`;
