import styled from "styled-components";
import Colors from "theme/Colors";
import {Device} from "theme/mediaQueries";
// import tw, {theme} from "twin.macro";

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
	color: ${Colors.redColor};
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
	display: inline-flex;
	padding-top: 14px;
	padding-left: 11px;
	position: absolute;
	z-index: 0;
	margin-top: 32px;
	margin-left: 938px;
	width: 307px;
	height: 61px;
	background: #317126 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000086;
	border-radius: 6px;
	opacity: 1;
	padding-left: 8px;
`;
/*Original
export const StyleNotificationError = styled.div`
	display: inline-flex;
	padding-top: 14px;
	padding-left: 11px;
	position: absolute;
	z-index: 0;
	margin-top: 32px;
	margin-left: 938px;
	width: 307px;
	height: 61px;
	//background: #bc3434 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000086;
	border-radius: 6px;
	opacity: 1;
	padding-left: 8px;
`;
*/
/* Responsive version
export const StyledNotificationContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	@media (min-width: 767px) {
		justify-content: flex-end;
	}
`;
*/

/*Responsive version
export const StyleNotificationError = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0rem 1rem 0rem 1rem;
	width: min(17rem);
	height: 4rem;
	border-radius: 6px;
	background: #bc3434;
	z-index: 10;
	position: absolute;
	margin-top: 6.5rem;
	margin-right: 0;
	@media (min-width: 768px) {
		margin-top: 1rem;
		margin-right: min(2%);
	}
	@media (min-width: 931px) {
		margin-right: min(10%);
	}
`;
*/

//responsive with tw
export const StyledNotificationContainer = styled.div.attrs({
	className: "flex justify-center w-full md:justify-end",
})``;

//responsive with tw
export const StyleNotificationError = styled.div.attrs({
	className: "absolute flex flex-row justify-center items-center h-16 py-0 px-1 z-10 mr-0",
})`
	width: min(17rem);
	border-radius: 6px;
	background: #bc3434;
	margin-top: 6.5rem;
	margin-left: 1rem;
	@media ${Device.minTablet} {
		margin-top: 1rem;
		margin-right: min(2%);
	}
	@media ${Device.minLaptop} {
		margin-right: min(10%);
	}
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
