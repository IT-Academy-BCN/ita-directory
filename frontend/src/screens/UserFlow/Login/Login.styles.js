import styled from "styled-components";
import Colors from "theme/Colors";

export const Container = styled.div`
	background: #ffffff 0% 0% no-repeat padding-box;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0 2px 7px ${Colors.darkerShadow};
	overflow: hidden;
	max-width: 22rem;
	margin: 1rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	width: 22rem;

	& > input {
		margin-bottom: 1em;
	}

	// & > .classInput {
	// 	margin-bottom: 1.69rem;
	// 	position: relative;

	// 	& > label {
	// 		display: inline-block;
	// 		margin-bottom: 5px;
	// 	}
	// }
`;

export const ChangePassword = styled.div`
	display: inline-block;
	padding: 0 0 0.5rem 0;
`;

export const Label = styled.label`
	display: inline-block;

	& > a {
		color: ${Colors.redColor};
		text-decoration: none;

		&:hover {
			color: blue;
		}
	}
`;

export const StyledError = styled.div`
	color: ${Colors.redColor};
	font-weight: 800;
	margin: 0 0 40px 0;
`;

export const StyledRedirect = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem 0 0 0;
	color: ${Colors.grey};
	font-size: 0.8rem;

	& > a {
		text-decoration: none;
		color: ${Colors.darkRed};
		margin: 0 0 0 0.2rem;
	}

	& > a:hover {
		color: blue;
	}
`;
