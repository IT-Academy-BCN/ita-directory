import styled from "styled-components";
import Colors from "theme/Colors";

export const Label = styled.label`
	display: inline-block;
	margin-bottom: 5px;
`;

export const Anchor = styled.a`
	color: ${Colors.redColor};
	text-decoration: none;
	padding: 2px 5px;
	&:hover {
		color: blue;
	}
`;
