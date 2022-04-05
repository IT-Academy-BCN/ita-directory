import styled from "styled-components";
import Colors from "theme/Colors";
import {Device} from "../../theme/mediaQueries";

export const StyledTableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 20px 0px;
	font: normal normal normal 14px/18px Arial;
	width: 100%;
	border-radius: 10px;
	border: 0px 1px 1px 1px solid ${Colors.maroon};
	box-shadow: 1px 4px 8px 0 ${Colors.shadow}, 1px 6px 20px 0 ${Colors.lighterShadow};
	flex-wrap: nowrap;
	padding: 0.5rem 1.8rem;

	@media only ${Device.maxTablet} {
		width: 100%;
		font: normal normal normal 6px/18px Arial;
	}
	@media only ${Device.maxMobileXl} {
		width: 100%;
	}

	.actions-column {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		button {
			width: 42px;
			height: 42px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: transparent;
			border: none;

			svg {
				font-size: 20px;
			}
		}
	}
`;

export const StyledImage = styled.img`
	border-radius: 50%;
`;

export const StyledCell = styled.div`
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.justify ? props.justify : "start")};
	color: ${(props) => props.color};
	font-weight: bold;
	padding: 10px 0px;
	padding-left: ${(props) => props.paddingL};

	@media only ${Device.maxMobileXl} {
		font-size: 14px;
	}
`;
