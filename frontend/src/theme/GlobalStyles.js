import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 70%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	flex-direction: ${(props) => (props.column ? "column" : "row")};

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;
