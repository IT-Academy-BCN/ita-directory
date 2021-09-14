import styled from "styled-components";
import Colors from "theme/Colors";

export const TextAreaStyled = styled.div`
	&.textAreaCreateNewAd {
		display: flex;
		@media screen and (max-width: 600px) {
			flex-direction: column;
		}
		margin-bottom: 15px;
	}

	label {
		display: flex;
		flex-direction: row;
		padding: 3px 45px 0 0;
		color: ${Colors.lightGray};
	}
`;

export const TextAreaError = styled.div`
	&.textAreaCreateNewAd {
		border: 1px solid #707070;
		border-radius: 5px;
	}
`;

export const TextAreaInput = styled.textarea`
	width: 18.6rem;
	height: 8.6rem;
	border-radius: 5px;
	border: 1px solid #dddddd;
	display: block;
	font: normal normal normal 16px/32px Helvetica Neue;
	font-size: 14px;
	color: #393939;
	padding: 0.75rem;
	resize: none;
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
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
