import styled from "styled-components";
import {Device} from "../../../theme/mediaQueries";

export const AdCardListStyled = styled.div`
	.list-scroll {
		display: grid;
		grid-gap: 1.5rem;

		@media ${Device.minTablet} {
			grid-template-columns: repeat(2, 1fr);
		}

		@media ${Device.minLaptop} {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;
