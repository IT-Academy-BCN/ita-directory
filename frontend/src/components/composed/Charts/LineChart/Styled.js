import styled from "styled-components";
import Colors from "theme/Colors";

export const MySvg = styled.svg`
	.toolLine {
		stroke: #a5a5a5;
		stroke-width: 1px;
		fill: none;
	}
	.tooltip {
		background-color: red;
	}
	.line,
	.circle {
		animation-name: lines;
		animation: fadeIn ease-in 1s;
		width: 10px;
	}

	.tick line {
		opacity: 0.2;
	}

	text {
		font-size: large;
		color: ${Colors.lightGrey};

		@media screen and (min-width: 600px) {
			font-size: x-large;
		}
	}

	@keyframes lines {
		0% {
			left: 0%;
		}
		50% {
			left: 50%;
		}
		100% {
			right: 100%;
		}
	}
`;
