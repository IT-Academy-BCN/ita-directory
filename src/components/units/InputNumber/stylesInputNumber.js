import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	border-radius: 5px;
	border: 1px solid grey;
	width: 18.6rem;
	height: 2.6rem;
	padding: 5px;
	border-radius: 5px;
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
	&:focus-within input{
		outline: 0 none;
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
	left: 0;
	top: 0;
	visibility: visible;

	&.errorProfile {
		position: static;
	}
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-right: 25px;
	color: grey;
`;

export const StyledLabelContainer = styled.div`
	display: flex;
`;

export const StyledEmptyLabel = styled.label`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-right: 25px;
	color: transparent;
`;
