import styled from "styled-components";
import Colors from "../../../theme/Colors";

export const InputContainerStyled = styled.div.attrs((props) => ({
	className: `${props.minMarginTop ? "mt-0.5" : "mt-4"}`,
}))`
	${(props) =>
		props.type === "checkbox" &&
		`display: flex;
		align-items: center;`}
`;

export const InputStyled = styled.input.attrs((props) => ({
	className: ``,
}))`
	height: 40px;
	width: 90%;
	padding: 0.3rem 1rem;
	border-radius: 0;
	border: 1px solid ${Colors.transparent};
	border-bottom: 1px solid ${Colors.lightGray};

	&:hover {
		border-radius: 1rem;
		border-bottom: 1px solid ${Colors.redPink};
	}
	&.error {
		border: 1px solid #fecaca !important;
	}
	&:focus {
		outline: 0 none;
		border-radius: 1rem;
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
