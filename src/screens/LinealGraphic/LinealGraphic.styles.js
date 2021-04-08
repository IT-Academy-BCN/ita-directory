import styled from "styled-components";
import Colors from "theme/Colors";

export const CardChart = styled.div`
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid ${Colors.extraLightGrey};
	border-radius: 6px;
	opacity: 1;
`;

export const CardHeader = styled.div`
	height: 51px;
	width: 100%;
	display: flex;
	color: #ffffff;
	font-size: 16px;
	justify-content: space-between;
	align-items: center;
	background-color: #e12d2d;
	border-radius: 6px 6px 0px 0px;
`;

export const CardHeaderTitle = styled.h3`
	letter-spacing: 0px;
	font-weight: 400;
	padding-left: 17px;
`;
export const CardHeaderSelect = styled.select`
	width: 90px;
	border: none;
	background-color: #fff;
	color: #e12d2d;
	height: 30px;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	margin-right: 10px;
`;
