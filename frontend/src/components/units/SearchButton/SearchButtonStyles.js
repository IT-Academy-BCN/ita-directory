import styled from "styled-components";
import Colors from "../../../theme/Colors";

const blueColor = Colors.frenchBlue;
const lightBlueColor = Colors.lightBlue;

export const Wrapper = styled.div`
	height: 35px;
	width: 35px;
	background: linear-gradient(to bottom right, ${blueColor}, ${lightBlueColor});
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	:hover {
		cursor: pointer;
	}
`;
