import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledInput = styled.input`
	width: 18.6rem;
	height: 2.6rem;
	border-radius: 5px;
	border: 1px solid #dddddd;
	display: block;
	font: normal normal normal 16px/32px Helvetica Neue;
	font-size: 14px;
	color: #393939;
	padding: 0.75rem;
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
	&.styleInput {
		width: 475px;
		height: 142px;
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

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	padding: 3px 45px 0 0;
	color: #999999;
`;

export const StyledContainer = styled.div`
	&.createNewAd {
		display: flex;
	}
`;
