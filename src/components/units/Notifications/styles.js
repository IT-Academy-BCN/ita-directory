import styled from "styled-components";

export const NotificationWrapper = styled.div`
	top: 32px;
	left: 938px;
	width: 307px;
	height: 61px;
	box-shadow: 0px 3px 6px #00000086;
	border-radius: 6px;
	opacity: 1;
	align-items: center;
	display: flex;
	justify-content: space-around;
	&.success {
		background: #317126 0% 0% no-repeat padding-box;
	}
	&.error {
		background: #bc3434 0% 0% no-repeat padding-box;
	}
`;

export const NotificationMessage = styled.p`
	top: 46px;
	left: 998px;
	width: 233px;
	height: 34px;
	text-align: left;
	font: normal normal normal 14px/18px Helvetica Neue;
	letter-spacing: 0px;
	color: #ffffff;
	opacity: 1;
`;

export const NotificationIcon = styled.i`
	top: 48px;
	left: 949px;
	width: 30px;
	height: 30px;
	background: #ffffff 0% 0% no-repeat padding-box;
	opacity: 1;
`;
