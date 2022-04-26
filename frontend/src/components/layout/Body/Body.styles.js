import styled from "styled-components";
import {Device} from "../../../theme/mediaQueries";

export const StyledBody = styled.div`
	min-height: 100vh;
	width: 100vw;
	/* display: flex;
	flex-direction: column; */
`;

export const Childrens = styled.div`
	display: flex;
	justify-content: center;
	/* padding-top: 3.5rem; */
	padding-top: 1rem;
	min-height: calc(100vh - 360px);

	@media ${Device.Tablet} {
		min-height: calc(100vh - 300px);
	}

	&.accessRegister {
		padding-top: 3.5rem;
	}

	&.profile {
		padding-top: 1rem;
	}
`;
