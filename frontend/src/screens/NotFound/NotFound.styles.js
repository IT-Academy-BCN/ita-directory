import styled from "styled-components";

export const Container = styled.div`
	margin: 0;
	padding: 0;
	min-height: 100vh;
	width: 100vw;
	text-align: center;
	font-family: sans-serif;
	background-color: #e9f2f9;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.http__Message {
		font-size: 150px;
		color: #76adf5;
		text-shadow: 1px 1px 1px #192791, 2px 2px 1px #192791, 3px 3px 1px #192791,
			4px 4px 1px #192791, 5px 5px 1px #192791, 6px 6px 1px #192791, 7px 7px 1px #192791,
			8px 8px 1px #192791, 25px 25px 8px rgba(0, 0, 0, 0.2);
		@media (max-width: 550px) {
			font-size: 100px;
			font-weight: 530;
		}
	}
	.error__Mess {
		margin: 2rem 0;
		font-size: 20px;
		font-weight: 600;
		color: #444;
		@media (max-width: 550px) {
			font-size: 19px;
			font-weight: 530;
			display: flex;
		}
	}
	.backHome__Link {
		display: inline-block;
		color: #222;
		text-transform: uppercase;
		cursor: pointer;
		font-weight: 600;
		padding: 0.75rem 1rem 0.6rem;
		margin-bottom: 1rem;
		transition: all 0.2s linear;
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
		&:hover {
			background: #76adf5;
			color: #fff;
		}
		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}

	.contact__Link {
		display: inline-block;
		color: #222;
		text-transform: uppercase;
		cursor: pointer;
		font-weight: 600;
		padding: 0.75rem 1rem 0.6rem;
		margin: 1rem 0;
		transition: all 0.2s linear;
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
		&:hover {
			background: #76adf5;
			color: #fff;
		}
		@media (max-width: 1024px) {
			flex-direction: column;
		}
	}
`;


