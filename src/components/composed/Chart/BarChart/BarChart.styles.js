import styled from "styled-components";

export const Card = styled.div`
	width: min(800px, 90%);
	min-height: 413px;
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid #dddddd;
	border-radius: 6px;
	overflow: hidden;
`;

export const CardHeader = styled.div`
	height: 51px;
	background-color: #e22e2e;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CardTitle = styled.h2`
	font: normal normal normal 16px/18px Arial;
	margin-left: 15px;
	color: white;
`;

export const CardSelector = styled.select`
	margin-right: 12px;
	width: 94px;
	height: 35px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	color: #e22e2e;
	font: normal normal normal 16px/18px Arial;
`;

export const Chart = styled.div`
	padding: 20px;
	width: 100%;
	height: 100%;
`;
