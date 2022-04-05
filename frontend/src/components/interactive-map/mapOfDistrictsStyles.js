import styled from "styled-components";
import {Device, responsiveSizes} from "../../theme/mediaQueries";

export const ContainerExterior = styled.div`
	width: 100%;
	max-width: ${responsiveSizes.desktop};
	margin: inherit auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	position: relative;

	@media ${Device.maxTablet} {
		flex-direction: row;
		flex-wrap: nowrap;
	}
	@media ${Device.maxDesktop} {
		flex-wrap: wrap;
		flex-direction: column-reverse;
		justify-self: center;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
	justify-content: center;
	align-items: flex-start;
	align-content: flex-start;
	margin-top: 3rem;

	@media ${Device.maxMobileXl} {
		width: 100%;
	}
	@media ${Device.maxTablet} {
		flex-direction: row;
		flex-wrap: nowrap;
	}
	@media ${Device.maxDesktop} {
		justify-content: space-between;
	}
	@media ${Device.minLaptopLg} {
		justify-content: space-around;
	}
`;

export const GridItem = styled.div`
	width: 25%;
	z-index: 10;

	@media ${Device.maxMobileXl} {
		width: 100%;
	}
	@media ${Device.maxLaptop} {
		width: 50%;
	}
	@media ${Device.maxTablet} {
		width: 100%;
	}
`;

export const Mapa = styled.div`
	position: absolute;
	top: calc(50% - 20%);
	left: calc(50% - 24%);

	@media ${Device.maxMobileXl} {
		position: absolute;
		margin-left: 30vw;
	}

	@media ${Device.maxDesktop} {
		position: relative;
		top: 1rem;
		left: calc(50% - 14rem);
	}
`;
