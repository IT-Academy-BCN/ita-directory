import styled from "styled-components";
import Colors from "theme/Colors";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 65vh;
	padding-bottom: 4rem;
`;

export const Form = styled.form`
	background: #ffffff 0% 0% no-repeat padding-box;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0 2px 7px ${Colors.darkerShadow};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	width: 22rem;

	& > input {
		margin: 0;
	}

	& > input:not(:first-of-type) {
		margin-top: 1.5rem;
	}
`;

export const RedirectStyled = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	color: ${Colors.grey};
	font-size: 0.8rem;

	& > a {
		text-decoration: none;
		color: ${Colors.darkRed};
		margin-left: 0.2rem;

		&:hover {
			color: ${Colors.extraDarkBlue};
		}
	}
`;

export const LabelStyled = styled.label`
	display: inline-block;
	font: normal normal 300 14px/18px Helvetica Neue;
`;
