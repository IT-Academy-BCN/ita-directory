import styled from "styled-components";
import colors from "theme/Colors";

export const Form = styled.form`
	border: 1px solid ${colors.lighterGrey};
	border-radius: 0.5rem;
	padding: 1rem;

	label {
		color: ${colors.grey};
		font-weight: bold;
	}
`;
