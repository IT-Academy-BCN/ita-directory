import styled from "styled-components";
import {Device} from "../../../theme/mediaQueries";

export const AdCardListStyled = styled.div`
	.list-scroll {
		display: grid;
		grid-gap: 1.5rem;

		@media ${Device.Tablet} {
			grid-template-columns: repeat(2, 1fr);
		}

		@media ${Device.Laptop} {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;
