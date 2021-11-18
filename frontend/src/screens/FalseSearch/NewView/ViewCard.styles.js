import styled from "styled-components";

export const StyledViewCard = styled.div`
	border-radius: 6px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	margin-bottom: 1.5rem;

	img {
		height: 175px;
		object-fit: cover;
		border-radius: 6px;
		:hover {
			cursor: pointer;
		}
	}
	.description {
		padding: 1rem 1.5rem;
	}
	.itemsInLine {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
	}
	span.price {
		font-weight: bold;
		font-size: 18px;
	}
`;
