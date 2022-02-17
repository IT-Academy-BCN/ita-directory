import styled from "styled-components";
import {Container} from "theme/GlobalStyles";

export const HomeContainer = styled(Container)`
	height: 70vh;
	position: absolute;
	left: 0;
	min-width: 100vw;
	ul {
		text-align: center;

		li {
			margin: 0.5rem;
		}
	}

	a {
		&:hover {
			text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
			color: blue;
		}
	}
`;
