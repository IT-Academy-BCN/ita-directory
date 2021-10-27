import styled from "styled-components";

export const CheckBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	& input {
		width: 1rem;
		margin: 0;
		margin-right: 0.25rem;
	}

	& small {
		align-self: flex-start;
	}
`;
