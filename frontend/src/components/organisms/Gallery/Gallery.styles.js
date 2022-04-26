import styled from "styled-components";
import {Device} from "../../../theme/mediaQueries";

export const GalleryStyled = styled.div`
	width: 90%;
	padding-right: 3rem;
	padding-left: 3rem;

	@media ${Device.Tablet} {
		width: 80%;
	}
`;
