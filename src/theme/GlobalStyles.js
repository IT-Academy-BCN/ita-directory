import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: ${(props) => (props.column ? "column" : "row")};
`;
