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
	width: 18.6rem;
	height: 2.6rem;
	margin: 0.5rem 0 0 0;
	text-align: center;
	&.blueGradient {
		background: transparent
			linear-gradient(98deg, ${Colors.lightBlue} 0%, ${Colors.darkBlue} 100%) 0% 0% no-repeat
			padding-box;
		color: ${Colors.white};
	}
	&.orangeGradient {
		background: transparent
			linear-gradient(98deg, ${Colors.lightOrange} 0%, ${Colors.darkOrange} 100%) 0% 0%
			no-repeat padding-box;
		color: ${Colors.white};
	}
	&.blueGradientProfile {
		background: transparent
			linear-gradient(98deg, ${Colors.lightBlue} 0%, ${Colors.darkBlue} 100%) 0% 0% no-repeat
			padding-box;
		color: ${Colors.white};
		width: 7rem;
	}
	&.greenGradient {
		background: transparent
			linear-gradient(98deg, ${Colors.lightGreen} 0%, ${Colors.darkGreen} 100%) 0% 0%
			no-repeat padding-box;
		color: ${Colors.white};
		width: 9rem;
	}
	&.darkBlue {
		width: 7rem;
		height: 37px;
		background: ${Colors.extraDarkBlue};
		color: ${Colors.white};
		margin: 10px;
		padding: 5px 10px;
		border: 2px solid ${Colors.extraDarkBlue};
		border-radius: 6px;
		cursor: pointer;
		box-shadow: 0px 3px 6px #00000029;
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
