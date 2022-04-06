import styled from "styled-components";
import {Device} from "../theme/mediaQueries";

export const Container = styled.div`
	width: 100%;
	max-width: 85%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: ${(props) => (props.column ? "column" : "row")};

	@media ${Device.Tablet} {
		max-width: 70%;
	}

	* {
		transition: all 0.35s ease-in-out;

		*:hover {
			transition: all 0.15s ease-in-out;
		}
	}

	& > input:hover,
	& > textarea:hover,
	& > button:hover {
		backdrop-filter: brightness(0.8);
		border: 1px dotted;
	}
`;
