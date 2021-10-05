import styled from "styled-components";
import Colors from "theme/Colors";

export const MyTableStyle = styled.table`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 20px 0px;
	width: 100%;
	max-width: 70%;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid ${Colors.grey};

	@media only screen and (max-width: 650px) {
		width: 100%;
		font: normal normal normal 6px/18px Arial;
	}
	@media only screen and (max-width: 450px) {
		width: 100%;
	}

	// .actions-column {
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: end;
	// 	width: 40px;

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
`;

export const StyledDiv = styled.div`
	color: ${(props) => props.color};
	font-size: 14px;
	text-align: center;
	font-weight: bold;
	padding: 10px 0px;

	padding-left: ${(props) => props.paddingL};
	@media only screen and (max-width: 650px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

export const RowTableStyle = styled.div`
	color: ${(props) => props.color};
	font-size: 14px;
	text-align: center;
	font-weight: bold;
	padding: 10px 0px;

	padding-left: ${(props) => props.paddingL};
	@media only screen and (max-width: 650px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;

export const HeaderTableStyle = styled.div`
	color: ${(props) => props.color};
	font-size: 14px;
	text-align: center;
	font-weight: bold;
	padding: 10px 0px;

	padding-left: ${(props) => props.paddingL};
	@media only screen and (max-width: 650px) {
		font-size: 14px;
	}
	@media only screen and (max-width: 450px) {
		font-size: 14px;
	}
`;
