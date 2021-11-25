import styled from "styled-components";
import Colors from "theme/Colors";

/* 
320px — 480px: Mobile devices.
481px — 768px: iPads, Tablets.
769px — 1024px: Small screens, laptops.
1025px — 1200px: Desktops, large screens.
*/
export const SearchStyled = styled.div`
	height: 100vh;
	padding: 0 1rem;

	.search-body {
		display: grid;
		grid-template-columns: 1fr;

		@media only screen and (min-width: 768px) {
			grid-template-columns: 0.6fr 0.4fr;
		}
	}
	.search-results {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.search-results-list {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0.4rem;
		background-color: blueviolet;

		@media only screen and (min-width: 480px) {
			grid-template-columns: 1fr 1fr;
			padding-right: 0;
		}

		@media only screen and (min-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
			padding-right: 0.8rem;
		}
	}
	.search-more-button {
		display: flex;
		justify-content: center;
	}
	.spinner {
		width: 2.5rem;
		height: 2.5rem;
		color: ${Colors.frenchBlue};

		animation-name: fullRotation;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		@keyframes fullRotation {
			from {
				transform: rotate(0deg);
				width: 0.5rem;
			}
			to {
				width: 1;
				transform: rotate(360deg);
			}
		}
		@media only screen and (min-width: 768px) {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
	.search-map {
		background-color: orange; // Quitar
		width: 100%;
		padding-top: 1rem;

		@media only screen and (min-width: 768px) {
			padding-left: 0.8rem;
		}

		@media only screen and (min-width: 1024px) {
			padding: 0 0 0 0.8rem;
		}
	}
	.box {
		background-color: red; // Quitar
		width: 100%;
		height: 10rem;
		border-radius: 8px;
	}
	.map {
		background-color: lightgreen; // Quitar
		height: 100%;
		border-radius: 8px;
	}
`;
