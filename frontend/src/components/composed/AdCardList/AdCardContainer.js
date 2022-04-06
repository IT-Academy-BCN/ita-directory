import styled from "styled-components";
import {Device} from "../../../theme/mediaQueries";

export const AdCardContainer = styled.div`
	display: block;

	@media ${Device.Mobile} {
		padding: 16px;
		width: 50%;
	}
	@media only ${Device.Laptop} {
		padding: 16px;
		width: 33.33%;
	}
`;
