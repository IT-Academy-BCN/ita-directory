import styled from "styled-components";

export const Card = styled.div`
	min-width: 90%;
	height: auto;
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: #f4f4f4;
	display: flex;
`;

export const CardHeader = styled.div`
	height: auto;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: space-between;
	padding-bottom: 1rem;
	padding: 0.5rem 2rem;
`;

export const CardTitle = styled.h2`
	font-weight: 400;
	color: black;
	padding-right: 2rem;
`;

//Afecta a los selectores de los modals
export const CardInput = styled.input`
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
`;

export const CardCheckbox = styled.input`
	margin-right: 0.3rem;
	padding-left: 0.5rem;
	width: 20px;
	height: 20px;
	box-shadow: 0 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	color: #e22e2e;
`;

export const CardSelectorWrapper = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 1rem;
	padding-top: 1rem;
`;

export const CardOpenModal = styled.button`
	display: inline-flex;
	height: 35px;
	width: 35px;
	align-items: center;
	justify-content: center;
	border-radius: 90px;
	color: #e22e2e;
	background: #fff;
	border: none;
	cursor: pointer;
`;

export const Chart = styled.div`
	width: 100%;
	height: 50vh;
	margin: 12px;
`;
