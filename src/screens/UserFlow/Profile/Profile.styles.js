import styled from "styled-components";
// import Colors from "theme/Colors";

export const BodyWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	width: 100%;
	height: 40rem;
	margin: 2rem;
`;

export const StyledFormProfile = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background: #f7f7f7 0% 0% no-repeat padding-box;
	border-radius: 6px;
	opacity: 1;
	padding-right: 3.5rem;
	padding-left: 3.5rem;
	width: 100%;
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
		font-size: 12px;
	}
`;
