import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledMainContainer = styled.div`
	display: flex;
	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const StyledContainerInputError = styled.div`
	display: flex;
	flex-direction: column;
`;

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
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
	&:focus-within {
		outline: 0 none;
		border: 3px solid #000;
	}
	&.styleInputCreateNewAd {
		border: 1px solid #707070;
	}
	&.styleFilterList {
		width: 67px;
		height: 31px;
		padding: 0;
		margin-top: 5px;
		border: none;
		&:focus-within {
			outline: 0 none;
			border: none;
		}
	}
	&.styleFilter {
		margin-right: 10px;
	}
`;

export const StyledIcon = styled.div`
	display: flex;
	margin-right: 6px;
	color: #999999;
	flex-basis: 20px;
`;

export const StyledInput = styled.input`
	width: 18.6rem;
	height: 2rem;
	border: none;
	display: flex;
	font-size: 14px;
	color: #393939;
	padding: 0.75rem;
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	&[type="number"] {
		-moz-appearance: textfield;
	}
	&:focus-within {
		outline: 0 none;
		border: none;
	}
	&.error {
		border: none;
		outline: 0 none;
	}
	&.styleFilterList {
		width: 67px;
		height: 31px;
		background: #ffffff 0% 0% no-repeat padding-box;
		border: 1px solid #707070;
		opacity: 1;
		padding: 5px 0 0 5px;
		&:focus-within {
			outline: 0 none;
			border: 1px solid #000;
		}
	}
`;

export const StyledError = styled.small`
	color: #e74c3c;
	left: 0;
	top: 0;
	visibility: visible;
	margin-bottom: 15px;
	&.errorProfile {
		position: static;
	}
	&.styleFilterList {
		font-size: 10px;
	}
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	padding: 3px 45px 0 0;
	color: #999999;
`;
