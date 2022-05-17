import styled from "styled-components";

export const PaginationStyled = styled.ul`
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	margin-bottom: 20px;

	.page-item {
		border: 1px solid black;
		border-radius: 3px;
		padding: 2px 4px;
		cursor: pointer;
	}

	.page-item.active {
		background: #e2dede;
	}
`;
