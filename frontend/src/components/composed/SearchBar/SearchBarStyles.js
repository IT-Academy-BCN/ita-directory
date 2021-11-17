import styled from "styled-components";
import Colors from "../../../theme/Colors";

const blueColor = Colors.transparentBlue;
export const Wrapper = styled.div`
	width: 100vw;
	height: 45px;
	background-color: ${blueColor};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
export const SearchBarContainer = styled.div`
	width: 70%;
	height: 80%;
	display: flex;
	flex-direction: row;
	margin: auto;
	margin-top: 0;
	margin-bottom: 0;
	justify-content: flex-start;
	align-items: center;
`;
