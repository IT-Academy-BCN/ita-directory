import styled from "styled-components";

export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 20px 0px;
	font: normal normal normal 14px/18px Arial;
	width: 100%;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid #b0b0b0;

	@media only screen and (max-width: 650px) {
		width: 100%;
		font: normal normal normal 6px/18px Arial;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
	}

	.actions-column {
		display: flex;
		align-items: center;
		justify-content: end;
		width: 40px;

		button {
			width: 42px;
			height: 42px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			border: none;

			svg {
				font-size: 17px;
			}
		}
	}
`;

export const StyledDiv = styled.div`
	color: ${(props) => props.color};
	font-size: 14px;
	text-align: center;
	font-weight: bold;
	padding: 5px 0px;

	padding-left: ${(props) => props.paddingL};
	@media only screen and (max-width: 650px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;
