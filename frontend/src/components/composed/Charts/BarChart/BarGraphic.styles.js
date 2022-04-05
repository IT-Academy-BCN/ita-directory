import styled from "styled-components";
import SelectArrow from "assets/images/select-arrow.svg";
import Colors from "theme/Colors";
import {Device} from "../../../../theme/mediaQueries";

export const BarGraphicStyled = styled.div`
	min-width: 100%;
	margin: auto;
	min-height: calc(90vh - 10rem - 120px);
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: #fff;

	.header {
		height: auto;
		background-color: #e22e2e;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 1rem;

		@media ${Device.minTablet} {
			flex-direction: row;
			padding: 0.5rem 2rem;
		}

		h2 {
			font-weight: 400;
			color: white;
		}

		.selectorWrapper {
			display: flex;
			align-items: center;

			select {
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				margin-right: 0.3rem;
				padding-left: 0.5rem;
				width: 110px;
				height: 30px;
				box-shadow: 0 3px 6px #00000029;
				border: none;
				border-radius: 4px;
				color: #e22e2e;
				background-image: url(${SelectArrow});
				background-position: 95% 50%;
				background-repeat: no-repeat;
				background-size: 15px 12px;
				background-color: #fff;
				@media ${Device.maxTablet} {
					width: 90px;
				}
			}

			button {
				display: inline-flex;
				height: 35px;
				width: 35px;
				align-items: center;
				justify-content: center;
				border-radius: 90px;
				color: #e22e2e;
				background: #fff;
				border: none;
				cursor: pointer;
			}
		}
	}
`;

export const D3SvgChartContainer = styled.div`
	margin: 20px;
`;

export const StyledSvg = styled.svg`
	overflow: visible;
	margin: 0 auto;
	.bar {
		animation: fadeIn ease-in 1s;
	}

	.bar-label {
		animation: fadeIn ease-in 1s;
		fill: black;
	}

	.chart {
		width: 100%;
		height: 50vh;
		margin: 12px;
	}

	.xaxis {
		animation: fadeIn 2s;
		display: block;
		height: 50px;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(100%);
		}
		100% {
			opacity: 1;
			transform: translateY(0%);
		}
	}
	text {
		font-size: small;
		color: ${Colors.lightGrey};

		@media ${Device.minTablet} {
			font-size: large;
		}
	}
`;

export const ChartLegend = styled.div`
	margin: 20px auto;
	ul {
		animation: fadeIn ease-in 1s;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	li {
		margin: 0 10px;
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}

	.dot {
		display: inline-block;
		vertical-align: center;
		width: 2rem;
		height: 1rem;
	}

	.legend-text {
		display: inline-block;
		vertical-align: center;
		color: gray;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
