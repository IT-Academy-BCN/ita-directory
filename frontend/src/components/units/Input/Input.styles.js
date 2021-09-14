import styled from "styled-components";
import Colors from "theme/Colors";

export const InputStyled = styled.div`
	&.createNewAd {
		display: flex;
		@media screen and (max-width: 600px) {
			flex-direction: column;
		}
		margin-bottom: 15px;
	}

	label {
		padding: 3px 45px 0 0;
		color: #999999;
	}

	.inputsContainer {
		display: flex;
		flex-direction: column;
	}
`;

export const StyledIconInput = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	border-radius: 5px;
	border: 1px solid #dddddd;
	width: 18.6rem;
	height: 2.6rem;
	padding: 5px;
	&:focus-within {
		outline: 0 none;
		border: 3px solid #000 !important;
	}
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
	&.createNewAd {
		border: 1px solid #707070;
	}

	.styledIcon {
		display: flex;
		margin-right: 6px;
		color: #999999;
		flex-basis: 20px;
	}
`;

export const StyledInput = styled.input`
	width: 18.6rem;
	border: none;
	display: flex;
	font: normal normal normal 16px/32px Helvetica Neue;
	font-size: 14px;
	color: #393939;
	padding: 0.75rem;
	max-height: 80%;
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&:focus-within {
		outline: 0 none;
		border: none;
	}
	&.error {
		color: ${Colors.redColor};
		border: none;
		outline: 0 none;
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
