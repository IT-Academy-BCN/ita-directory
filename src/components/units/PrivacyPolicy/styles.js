import styled from "styled-components";
import Colors from "theme/Colors";

export const Checkbox = styled.div`
	margin: 0.12rem;
	width: 100%;

	& > input {
		margin: 0 0.7rem 0 0;
	}
`;

export const Label = styled.label`
	display: inline-block;
	margin-bottom: 0.5rem;
`;

export const Anchor = styled.a`
	color: ${Colors.redColor};
	text-decoration: none;
	padding: 2px 5px;
	&:hover {
		color: blue;
	}
`;
