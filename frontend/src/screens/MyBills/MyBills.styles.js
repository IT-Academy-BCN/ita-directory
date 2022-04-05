import styled from "styled-components";
import Colors from "theme/Colors";
import {Device} from "../../theme/mediaQueries";

export const MyTableStyle = styled.table`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 20px 0px;
	width: 100%;
	max-width: 70%;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid ${Colors.grey};

	@media ${Device.maxTablet} {
		width: 100%;
		font: normal normal normal 6px/18px Arial;
	}
	@media ${Device.maxMobileXl} {
		width: 100%;
	}

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

	@media ${Device.maxTablet} {
		font-size: 14px;
	}
	@media ${Device.maxMobileXl} {
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

	@media ${Device.maxTablet} {
		font-size: 14px;
	}
	@media ${Device.maxMobileXl} {
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

	@media ${Device.maxTablet} {
		font-size: 14px;
	}
	@media ${Device.maxMobileXl} {
		font-size: 14px;
	}
`;
