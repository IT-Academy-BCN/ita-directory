import styled from "styled-components";
import {Device} from "./../../theme/mediaQueries";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	label {
		flex-basis: 150px;
		color: #707070;
	}
	@media ${Device.max600} {
		padding-left: 5vw;
		padding-right: 5vw;
		label {
			flex-basis: 50px;
			padding: 5px;
		}
	}
`;

export const MapText = styled.p`
	margin-top: 3%;
`;
