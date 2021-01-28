import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledFormProfile = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	font: normal normal normal 16px/24px Helvetica Neue;
	background: #f7f7f7 0% 0% no-repeat padding-box;
	border-radius: 6px;
	opacity: 1;
	padding: 4rem;
	width: 40rem;
	height: 35rem;
	color: #4a4a4a;
`;

export const StyledPhotoWrapper = styled.div`
	display: flex;
	margin-bottom: 2rem;
	border-bottom: 1px solid #4a4a4a;
	padding-bottom: 2rem;

	p {
		margin-top: 0rem;
	}
`;
export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
`;

export const StyleUploadPhotoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 22rem;
	margin-left: 2rem;
`;

export const StyledInputsWrapper = styled.div`
	display: flex;
`;

export const StyledSaveWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
`;
