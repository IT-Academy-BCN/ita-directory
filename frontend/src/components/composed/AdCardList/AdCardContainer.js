import styled from "styled-components";
import {Device} from "../../../theme/mediaQueries";

export const AdCardContainer = styled.div`
	display: block;

	@media ${Device.minMobileXl} {
		padding: 16px;
		width: 50%;
	}
	@media only ${Device.minLaptop} {
		padding: 16px;
		width: 33.33%;
	}
`;
