import styled from "styled-components";

export const StyledIconWithLabel = styled.div`
	padding-top: 0.3rem;
	padding-bottom: 0.2rem;
	padding-left: 0.3rem;
	padding-right: 0.7rem;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	white-space: nowrap;
	&.hoveredOver {
		background: green;
		color: red;
	}
`;

export const StyledLabel = styled.div`
	padding-left: 0.5rem;
`;
