import styled from "styled-components";
import {Device, responsiveSizes} from "../../theme/mediaQueries";

export const ContainerExterior = styled.div`
	width: 100%;
	max-width: ${responsiveSizes.desktop};
	margin: inherit auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
	position: relative;
	flex-direction: column-reverse;

	@media ${Device.Tablet} {
		flex-wrap: wrap;
		justify-self: center;
	}
	@media ${Device.Desktop} {
		flex-wrap: nowrap;
		flex-direction: column;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 0.1rem;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	flex-wrap: nowrap;
	margin: 2rem 0 6rem 0;

	@media ${Device.Tablet} {
		flex-direction: row;
	}
	@media ${Device.Desktop} {
		justify-content: space-between;
		gap: 0.5rem;
	}
	@media ${Device.LaptopLg} {
		justify-content: space-around;
	}
`;

export const GridItem = styled.div`
	width: 100%;
	z-index: 10;

	@media ${Device.Mobile} {
		width: 50%;
	}
	@media ${Device.Tablet} {
		width: 25%;
	}
`;

export const Mapa = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media ${Device.Tablet} {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media ${Device.Desktop} {
		position: absolute;
		top: calc(50% - 20%);
		left: calc(50% - 42%);
		width: 80%;
	}
	@media ${Device.LaptopLg} {
		position: absolute;
		top: calc(50% - 25%);
		left: calc(50% - 45%);
	}
`;
