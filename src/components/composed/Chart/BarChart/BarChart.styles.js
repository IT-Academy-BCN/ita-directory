import styled from "styled-components";
import SelectArrow from "assets/images/select-arrow.svg";

export const Card = styled.div`
	min-width: 90%;
	min-height: calc(90vh - 10rem - 120px);
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: #fff;
`;

export const CardHeader = styled.div`
	height: auto;
	background-color: #e22e2e;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 0.5rem 1rem;
	}
`;

export const CardTitle = styled.h2`
	font: normal normal normal 16px/18px Arial;
	color: white;
`;

export const CardSelector = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin-right: 12px;
	width: 94px;
	height: 35px;
	box-shadow: 0 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	color: #e22e2e;
	font: normal normal normal 16px/18px Arial;
	background-image: url(${SelectArrow});
	background-position: 95% 50%;
	background-repeat: no-repeat;
	background-size: 15px 12px;
	background-color: #fff;
`;

export const Chart = styled.div`
	padding: 20px;
	width: 100%;
	height: 100%;
`;

export const CardSelectorWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const CardOpenModal = styled.button`
	border-radius: 90px;
	background: #fff;
	border: none;
	height: 35px;
	width: 35px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #e22e2e;
`;
