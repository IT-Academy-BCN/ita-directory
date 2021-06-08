import styled from "styled-components";
import Colors from "theme/Colors";
import SelectArrow from "assets/images/select-arrow.svg";

export const CardChart = styled.div`
	min-width: 100%;
	min-height: calc(90vh - 10rem - 120px);
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: ${Colors.white};
`;

export const CardHeader = styled.div`
	height: auto;
	background-color: #e22e2e;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;

	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 90px;
		border: none;
		background-color: #fff !important;
		color: #e12d2d;
		height: 30px;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		padding-left: 0.5rem;
		position: relative;
		background: url(${SelectArrow});
		background-repeat: no-repeat;
		background-position: 95% 50%;
		background-size: 14px 8px;
	}

	button.open-modal {
		width: 35px;
		height: 35px;
		border-radius: 90px;
		border: none;
		background: #ffffff;
		color: #e22e2e;
		box-shadow: 0px 3px 6px #00000029;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 0.5rem 2rem;
	}
`;

export const CardTitle = styled.h2`
	font-weight: 400;
	color: white;
`;

export const CardSelector = styled.select`
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	margin-right: 0.3rem;
	padding-left: 0.5rem;
	width: 90px;
	height: 30px;
	box-shadow: 0 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	color: #e22e2e;
	background-image: url(${SelectArrow});
	background-position: 95% 50%;
	background-repeat: no-repeat;
	background-size: 15px 12px;
	background-color: #fff;
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

export const Chart = styled.div`
	padding: 10px;
	width: 100%;
	height: 100%;
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
`;

export const CardBody = styled.div`
	padding-top: 2rem;
	justify-items: center;
	width: 100%;
	height: 40vh;
`;
