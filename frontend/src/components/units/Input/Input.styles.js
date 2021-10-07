import styled from "styled-components";

export const InputStyled = styled.div.attrs({
	className: " w-full ",
})``;

export const StyledInput = styled.input.attrs({
	className: `w-full text-sm py-1.5 px-2 my-4 border rounded-md border-gray-200 hover:opacity-90`,
})`
	&:focus {
		outline: 0 none;
		border: 1px solid red;
	}
`;

export const StyledError = styled.small.attrs({
	className: `text-red-600 pb-4`,
})``;
