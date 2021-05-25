import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 20px 0px;
	font: normal normal normal 6px/18px Arial;
	width: 100%;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid #b0b0b0;
	box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2), 1px 6px 20px 0 rgba(0, 0, 0, 0.19);
	flex-wrap: nowrap;
	padding: 0.1rem;

	@media only screen and (max-width: 650px) {
		width: 100%;
		font: normal normal normal 6px/18px Arial;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
	}
`;

export const StyledSpan = styled.span`
	color: ${(props) =>
		props.colorIcono === "rejected"
			? Colors.redColor
			: props.colorIcono === "aprobado"
			? Colors.darkGreen
			: props.colorIcono === "pending"
			? Colors.grey
			: props.colorIcono};
	padding-left: ${(props) => props.paddingL};
	@media only screen and (max-width: 650px) {
		font-size: 10px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 8px;
	}
`;

export const StyledImage = styled.img`
	border-radius: 50%;
`;

export const StyledDiv = styled.div`
	color: ${(props) => props.color};
	font-weight: bold;
	padding: 10px 0px;
	padding-left: ${(props) => props.paddingL};
	@media only screen and (max-width: 650px) {
		font-size: 10px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 8px;
	}
`;
