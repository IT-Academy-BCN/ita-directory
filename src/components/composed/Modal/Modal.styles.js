import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";
import Colors from "theme/Colors";

export const ModalBlock = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	overflow: hidden;
	position: fixed;
	// z-index: 1000;
`;

export const ModalOverlay = styled.a`
	background: #0000004d 0% 0%;
	opacity: 1;
	right: 0;
	top: 0;
	bottom: 0;
	left: 0;
	cursor: default;
	display: block;
	position: absolute;
	animation: ${keyframes`${fadeIn}`} 0.25s;
`;

export const ModalClose = styled.a`
	float: left !important;
	text-decoration: none !important;
	cursor: pointer;
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	// max-height: 95vh;
	max-width: 100%;
	min-width: 25%;
	padding: 0 1.5rem;
	animation: ${keyframes`${fadeIn}`} 0.25s;
	z-index: 1;
`;

export const ModalBody = styled.div`
	overflow-y: auto;
	padding: 22px 0px;
	position: relative;
	font-family: Arial;
	font-size: 1rem;
	display: flex;
	width: 100%;
`;

export const ModalTitle = styled.span`
	font-size: 30px;
	font-weight: 500;
	color: ${Colors.darkRed};
	font: normal normal bold 24px/20px Arial;
	padding-left: 0px;
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
