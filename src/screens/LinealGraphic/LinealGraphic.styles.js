import styled from "styled-components";
import Colors from "theme/Colors";
import SelectArrow from "assets/images/select-arrow.svg";

export const CardChart = styled.div`
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid ${Colors.extraLightGrey};
	border-radius: 6px;
	opacity: 1;
	font: normal normal normal 15px/20px Helvetica Neue;
	justify-content: center;
`;

export const CardHeader = styled.div`
	height: 51px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
	background-color: #e12d2d;
	font-size: 16px;
	border-radius: 6px 6px 0px 0px;

	h3 {
		letter-spacing: 0px;
		font-weight: 400;
		padding-left: 17px;
		font: normal normal normal 15px/20px Helvetica Neue;
	}

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

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		padding: 1rem 1rem;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
`;

export const CardBody = styled.div`
	width: 100%;
	height: 40vh;
`;
