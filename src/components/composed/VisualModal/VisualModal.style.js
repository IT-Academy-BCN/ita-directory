import styled from "styled-components";
import Colors from "theme/Colors";

export const Wrapper = styled.div`
	margin-bottom: 25px;
	p {
		color: ${Colors.grey};
		fontsize: 0.95rem;
		fontfamily: "Arial";
		width: auto;
		letter-spacing: 0px;
		opacity: 1;
		width: auto;
	}

	.inputContainer :nth-child(2) div {
		width: 100%;
	}

	label {
		padding-right: 0;
		width: auto;
	}
`;

export const StyledSmall = styled.small`
	color: ${Colors.redColor};
`;
export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const StyledFormBack = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	font: normal normal normal 16px/24px Helvetica Neue;
	background: 0% 0% no-repeat padding-box;
	border-radius: 6px;
	opacity: 1;
	padding-right: 3.5rem;
	padding-left: 3.5rem;
	width: 50rem;
	color: #4a4a4a;
`;

export const StyledPhotoWrapper = styled.div`
	display: flex;
	border-bottom: 1px solid #4a4a4a;
	padding-bottom: 3rem;
	margin-top: 3rem;
	margin-bottom: 1rem;

	p {
		margin-top: 0rem;
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15rem;
`;

export const StyledSaveWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-bottom: 3rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin-right: 4.5rem;
	margin-bottom: 0.5rem;

	p {
		margin-top: 0;
		font-style: italic;
	}
`;

export const StyleUploadPhotoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 22rem;
	margin-left: 2rem;
`;

export const StyledInputsWrapper = styled.div`
	display: flex;
	margin-top: 1rem;
	margin-bottom: 2rem;
`;
