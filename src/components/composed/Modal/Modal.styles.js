import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";
import Colors from "theme/Colors";

export const ModalBlock = styled.div`
	align-items: center;
	bottom: 0;
	justify-content: center;
	left: 0;
	overflow: hidden;
	padding: 0.2rem;
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	opacity: 1;
	z-index: 400;

	.modalOverlay {
		background: rgba(0, 0, 0, 0.75);
		bottom: 0;
		cursor: default;
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.modalContainer {
		display: flex;
		flex-direction: column;
		max-height: 95vh;
		max-width: 850px;
		min-width: 25%;
		padding: 0 1.5rem;
		animation: ${keyframes`${fadeIn}`} 0.5s;
		z-index: 1;
		background: ${Colors.white} 0% 0% no-repeat padding-box;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 12px;
		opacity: 1;

		.modalHeader {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			color: #303742;
			padding: 20px 0px 10px 0px;
			border-bottom: 1px solid ${Colors.lightGray};

			span {
				font-size: 5px;
				font-weight: 500;
				color: ${(props) =>
					props.colorModalTitle ? props.colorModalTitle : Colors.darkRed};
				font: normal normal bold 24px/20px Arial;
				padding-left: 0px;
			}

			.modalClose {
				float: left !important;
				text-decoration: none !important;
				cursor: pointer;
				font-size: 1rem;
				color: ${Colors.lightGray};
				font: normal normal normal 1rem Arial;
			}
		}

		.modalBody {
			padding: 22px 0px;
			overflow-y: auto;
			position: relative;
			font-family: Arial;
			font-size: 1rem;
		}

		.modalFooter {
			padding: 10px 0px;
			text-align: right;
			border-top: 1px solid ${Colors.lightGray};
		}
	}
`;

export const Button = styled.button`
	background: ${Colors.darkBlue};
	color: ${Colors.white};
	font-size: 1em;
	font-family: Arial;
	margin: 10px;
	padding: 5px 10px;
	border: 2px solid ${Colors.darkBlue};
	border-radius: 3px;
	cursor: pointer;
`;
