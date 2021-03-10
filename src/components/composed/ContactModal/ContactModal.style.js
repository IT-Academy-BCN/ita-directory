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
