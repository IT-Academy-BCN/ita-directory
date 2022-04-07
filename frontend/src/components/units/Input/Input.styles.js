import styled from "styled-components";
import Colors from "theme/Colors";

export const InputContainerStyled = styled.div.attrs((props) => ({
	className: `${props.minMarginTop ? "mt-0.5" : "mt-4"}`,
}))`
	${(props) =>
		props.type === "checkbox" &&
		`display: flex;
		align-items: center;`}
`;

export const InputStyled = styled.input.attrs((props) => ({
	className: `
	w-full 
	text-sm 
	py-1.5 
	px-2
	border 
	rounded-md 
	hover:opacity-90 `,
}))`
	height: 49px;

	&.error {
		border: 1px solid #fecaca !important;
	}
	&:focus {
		outline: 0 none;
		border: 1px solid ${(props) => (props.error ? "red" : Colors.darkBlue)} !important;
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
