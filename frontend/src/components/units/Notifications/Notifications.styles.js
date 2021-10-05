import styled from "styled-components";
import Colors from "theme/Colors";

export const Container = styled.div`
	background: #ffffff 0% 0% no-repeat padding-box;
	border-radius: 10px;
	-webkit-border-radius: 10px;
	box-shadow: 0px 3px 6px #00000029;
	overflow: hidden;
	max-width: 22rem;
	margin: 1rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 2.19rem;

	& > .classInput {
		margin-bottom: 1.69rem;
		position: relative;

		& > label {
			display: inline-block;
			margin-bottom: 5px;
		}
	}
`;

export const StyledError = styled.div`
  color: ${Colors.redColor}
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const StyleRedirect = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem 0 0 0;

	& > a {
		text-decoration: none;
		color: ${Colors.darkOrange};
		margin: 0 0 0 0.2rem;
	}

	& > a:hover {
		color: ${Colors.darkBlue};
	}
`;
export const StyleNotificationSuccess = styled.div`
	display: flex;
	align-items: center;
	float: right;
	margin-top: 32px;
	margin-right: 32px;
	width: 307px;
	height: 61px;
	background: #317126 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000086;
	border-radius: 6px;
	opacity: 1;
	padding-left: 8px;
`;

export const StyleNotificationError = styled.div`
	display: flex;
	align-items: center;
	float: right;
	margin-top: 32px;
	margin-right: 100px;
	width: 307px;
	height: 61px;
	background: #bc3434 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000086;
	border-radius: 6px;
	opacity: 1;
	padding-left: 8px;
`;
export const StyleNotificationMessage = styled.div`
	color: white;
	font: Helvetica-neue;
	font-size: 12px;
	letter-spacing: 0px;
	opacity: 1;
	line-height: 1.2;
	padding-left: 15px;
`;
