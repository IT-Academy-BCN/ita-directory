import styled from "styled-components";
import Colors from "theme/Colors";

const StyledButton = styled.button`
	box-shadow: 0px 2px 4px #00000029;
	border: none;
	border-radius: 6px;
	opacity: 1;
	cursor: pointer;
	text-align: left;
	font: normal normal normal 15px/22px Helvetica Neue;
	letter-spacing: 0px;
	height: 40px;
	width: 297px;
	text-align: center;

	&.blueGradient {
		background: transparent
			linear-gradient(98deg, ${Colors.lightBlue} 0%, ${Colors.darkBlue} 100%) 0% 0% no-repeat
			padding-box;
		color: ${Colors.white};
	}

	&.disabled {
		cursor: not-allowed;
		opacity: 0.57;
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

export default StyledButton;
