import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";

export const ModalBlock = styled.div`
	align-items: center;
	bottom: 0;
	justify-content: center;
	left: 0;
	overflow: hidden;
	padding: 0.4rem;
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	opacity: 1;
	z-index: 1000;
	height: 100%;

	.modalOverlay {
		background: rgba(0, 0, 0, 0.75);
		animation: ${keyframes`${fadeIn}`} 0.25s;
		bottom: 0;
		cursor: default;
		display: block;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}

	.modalBody {
		overflow-y: auto;
		padding: 22px 0;
		position: relative;
		font-family: Arial;
		font-size: 1rem;
		width: 100%;
		/* height: 100%; */
	}
`;
