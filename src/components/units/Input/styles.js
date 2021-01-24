import styled from "styled-components";
import Colors from "theme/Colors";

const StyledInput = styled.input`
	top: 301px;
	left: 492px;
	width: 297px;
	height: 40px;
	border-radius: 6px;
	opacity: 1;
	&.error {
		border: 1px solid ${Colors.redColor};
		color: #7d868b;
	}
`;

export default StyledInput;


	// &.success {
	// 	background: #ffffff 0% 0% no-repeat padding-box;
	// 	border: 1px solid "#DDDDDD";
	// }
	// &.registration {
	// 	background: #e7ebf0 0% 0% no-repeat padding-box;
	// }