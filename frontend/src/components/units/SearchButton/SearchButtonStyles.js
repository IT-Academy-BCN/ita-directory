import styled from "styled-components";
import Colors from "../../../theme/Colors";
import {Device} from "../../theme/mediaQueries";

const blueColor = Colors.frenchBlue;
const lightBlueColor = Colors.lightBlue;

export const Wrapper = styled.div`
	height: 35px;
	width: 35px;
	background: linear-gradient(to left bottom, ${blueColor}, ${lightBlueColor});
	display: flex;
	flex-direction: row;
	/* flex-basis:8%; */
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	:hover {
		cursor: pointer;
	}
	transform: rotate(270deg);
	@media only ${Device.maxMobileXLarge} {
		width: 50%;
		transform: none;
		margin-right: 1.5%;
		flex-basis: 8%;
	}
`;
