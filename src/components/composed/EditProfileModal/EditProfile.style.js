import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledBodyWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 40rem;
	margin: 2rem;
`;

export const StyledFormBack = styled.form`
	display: flex;
	height: auto;
	justify-content: center;
	flex-direction: column;
	font: normal normal normal 16px/24px Arial;
	background: 0% 0% no-repeat padding-box;
	border-radius: 6px;
	opacity: 1;
	/* padding:2rem ; */
	/* padding-right: 3.5rem;
	padding-left: 3.5rem; */
	/* width: 50rem; */
	color: #4a4a4a;

	/* @media only screen and (max-width: 650px) {
		width: 100%;
		font: normal normal normal 6px/18px Arial;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
	} */
`;

export const StyledSubtitle = styled.form`
	display: flex;
	justify-content: start;
	flex-direction: column;
	font: 18px Arial;
	font-weight: normal;
	background: 0% 0% no-repeat padding-box;
	color: #4a4a4a;
	/* margin-bottom: 0.5rem; */
`;

export const StyledTextProfile = styled.form`
	display: flex;
	justify-content: start;
	flex-direction: column;
	font: 13px Arial;
	font-weight: normal;
	background: 0% 0% no-repeat padding-box;
	color: #4a4a4a;
	/* margin-bottom: 1rem; */
	line-height: 2rem;
`;

export const StyledPhotoWrapper = styled.div`
	display: flex;
	/* border-bottom: 1px solid #4a4a4a; */
	/* padding-bottom: 3rem;
	margin-top: 3rem; */
	/* margin-bottom: 1rem; */
	p {
		margin-top: 0rem;
	}
`;

export const ContainerImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
	height: 10rem;
	margin-right: 5%;
	box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08), 0px 3px 4px rgba(18, 71, 52, 0.02),
		0px 1px 16px rgba(18, 71, 52, 0.03);
	border-radius: 2%;
`;

export const StyleUploadPhotoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 22rem;
	margin-left: 2rem;
	justify-self: stretch;
`;

export const StyledInputsWrapper = styled.div`
	display: flex;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: row;
	margin-right: 3rem;
	margin-bottom: 0.5rem;
	p {
		margin-top: 0;
		font-style: italic;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const StyledSmall = styled.small`
	color: ${Colors.redColor};
`;
