import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	border-radius: 5px;
	border: 1px solid #dddddd;
	width: 18.6rem;
	height: 2.6rem;
	padding: 5px;
	border-radius: 5px;
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
`;

export const StyledIcon = styled.div`
	display: flex;
	margin-right: 6px;
	color: grey;
`;

export const StyledInput = styled.input`
	width: 18.6rem;
	height: 2rem;
	border: none;
	display: flex;
	font: normal normal normal 16px/32px Helvetica Neue;
	font-size: 14px;
	color: #393939;
	padding: 0.75rem;
	::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
 	}
	&[type="number"] {
		-moz-appearance: textfield;
	}
`;

export const StyledError = styled.small`
	color: #e74c3c;
	position: absolute;
	left: 0;
	visibility: visible;

	&.errorProfile {
		position: static;
	}
`;

