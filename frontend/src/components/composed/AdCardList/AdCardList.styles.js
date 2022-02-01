import styled from "styled-components";

export const AdCardListStyled = styled.div`
	.list-scroll {
		display: grid;
		grid-gap: 1.5rem;

		@media (min-width: 640px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: 1024px) {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;
