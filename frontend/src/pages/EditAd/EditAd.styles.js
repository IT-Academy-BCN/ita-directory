import styled from "styled-components";
import {Device} from "./../../theme/mediaQueries";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-left: 2vw;
	padding-right: 2vw;

	label {
		flex-basis: 50px;
		padding: 5px;
		color: #707070;
	}

	@media ${Device.Tablet} {
		padding-left: 5vw;
		padding-right: 5vw;

		label {
			flex-basis: 150px;
			padding: 5px;
		}
	}
`;

export const MapText = styled.p`
	margin-top: 3%;
`;
