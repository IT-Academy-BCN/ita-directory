import styled from "styled-components";
import SelectArrow from "assets/images/select-arrow.svg";

export const GlobalFiltersStyled = styled.div`
	min-width: 90%;
	height: auto;
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: #fff;

	.header {
		height: auto;
		background-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 1rem;

		@media (min-width: 768px) {
			flex-direction: row;
			padding: 0.5rem 2rem;
		}

		h2 {
			font-weight: 400;
			color: white;
			padding-right: 2rem;
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
				width: 90px;
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
			}
		}
	}
`;

//select afecta a los selectores de los modals
