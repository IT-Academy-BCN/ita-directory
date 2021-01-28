import styled from "styled-components";
import Colors from "theme/Colors";

export const StyledForm = styled.form`
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid #e2e2e2;
	border-radius: 6px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	opacity: 1;
	padding: 2rem;
	margin: 1rem;
	width: 22rem;
	height: 16rem;
`;
export const StyledError = styled.div`
  color: ${Colors.redColor}
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyleRedirect = styled.div`
	padding: 1rem 0 0 0;

	& > a {
		text-decoration: none;
		color: #7d868b;
	}
	& > a:hover {
		color: blue;
	}
`;
