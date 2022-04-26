import styled from "styled-components";
import Colors from "../../../theme/Colors";

export const Wrapper = styled.div`
	margin-bottom: 25px;
	p {
		color: ${Colors.grey};
		font-size: 0.95rem;
		font-family: "Arial";
		width: auto;
		letter-spacing: 0px;
		opacity: 1;
		width: auto;
	}

	.inputContainer :nth-child(2) div {
		width: 100%;
		height: 70px;
		margin-top: 20px;
	}

	label {
		font-size: 14px;
		font-family: Helvetica;
		font-weight: bold;
		padding-right: 0;
		width: auto;
		opacity: 0.8;
	}

	input::placeholder {
		color: ${Colors.grey};
		font-family: Helvetica;
		font-weight: bold;
		font-size: 30px;
		opacity: 0.6;
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
