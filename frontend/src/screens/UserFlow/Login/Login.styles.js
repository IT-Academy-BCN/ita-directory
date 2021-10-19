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
	.classInput {
		width: 100%;
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

// export const ChangePassword = styled.div`
// 	display: inline-block;
// 	padding: 0 0 0.5rem 0;
// `;

// export const Label = styled.label`
// 	display: inline-block;

// 	& > a {
// 		color: ${Colors.redColor};
// 		text-decoration: none;

// 		&:hover {
// 			color: blue;
// 		}
// 	}
// `;

export const StyledError = styled.div`
	color: ${Colors.redColor};
	font-weight: 800;
	margin-bottom: 40px;
`;

export const StyleRedirect = styled.div`
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

export const StyleNotificationSuccess = styled.div`
	display: flex;
	align-items: center;
	float: right;
	margin-top: 32px;
	margin-right: 32px;
	width: 307px;
	height: 61px;
	background: #317126 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px ${Colors.darkerShadow};
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
	box-shadow: 0px 3px 6px ${Colors.darkerShadow};
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
