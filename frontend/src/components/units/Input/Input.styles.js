import styled from "styled-components";
import Colors from "theme/Colors";

export const InputContainerStyled = styled.div.attrs({
	className: `mt-4`,
})`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	& input[type="checkbox"] {
		width: 1rem;
		margin: 0;
		margin-right: 0.25rem;
	}
`;

export const InputStyled = styled.input.attrs((props) => ({
	className: `
	w-full 
	text-sm 
	py-1.5 
	px-2
	border 
	rounded-md 
	hover:opacity-90 
	${props.error ? "border-red-200" : props.success ? "border-green-200" : "border-gray-200"}`,
}))`
	&:focus {
		outline: 0 none;
		border: 1px solid
			${(props) => (props.error ? "red" : props.success ? "green" : Colors.darkBlue)};
	}
`;

export const ErrorStyled = styled.small.attrs({
	className: `text-red-600`,
})`
	display: block;
	height: 0.1rem;
	font-size: 0.6rem;
	font-style: oblique;
	text-align: center;
`;
