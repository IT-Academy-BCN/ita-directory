import styled from "styled-components";
import Colors from "../../../theme/Colors";
import {Device} from "../../theme/mediaQueries";

const blueColor = Colors.frenchBlue;
const lightBlueColor = Colors.lightBlue;

export const Wrapper = styled.div`
	height: 35px;
	width: 50%;
	background: linear-gradient(to left bottom, ${blueColor}, ${lightBlueColor});
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	transform: none;
	margin-right: 1.5%;
	flex-basis: 8%;

	:hover {
		cursor: pointer;
	}

	@media only ${Device.Mobile} {
		width: 35px;
		transform: rotate(270deg);
	}
`;
