import styled from "styled-components";
import Colors from "theme/Colors";

export const ButtonWrapper = styled.button`
	font-family: Arial;
	color: white;
	display: flex;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
	&.success {
		color: black;
		background-color: ${Colors.greenColor};
		svg {
			color: black;
			margin-right: 15px;
		}
	}
	&.registration {
		background-color: ${Colors.orangeColor};
	}
	&.error {
		background-color: ${Colors.redColor};
	}
	&.disabled {
		cursor: not-allowed;
		opacity: 0.75;
	}
	&.animated {
		svg {
			animation: rotation 0.8s ease-in-out infinite;
		}
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
