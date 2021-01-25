import styled from "styled-components";
import Colors from "theme/Colors";

const StyledInput = styled.input`
	top: 301px;
	left: 492px;
	width: 297px;
	height: 40px;
	border-radius: 6px;
	opacity: 1;
	outline: none;
	border: 1px solid #dddddd;
	text-align: left;
	font: normal normal normal 16px/32px Helvetica Neue;
	letter-spacing: 0px;
	color: #393939;
	opacity: 1;

	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
`;

export default StyledInput;
