import styled from "styled-components";
import {Container} from "theme/GlobalStyles";

export const HomeContainer = styled(Container)`
	flex-direction: column;
	min-height: 70vh ul {
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
