import styled from "styled-components";

export const Card = styled.div`
	width: 35%;
	height: 50%;
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: #f4f4f4;
	display: flex;
	flex-direction: column;
	padding: 0.7rem 0.7rem;
	margin-right: 0.9rem;

	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		flex-direction: column;
	}

	@media (max-width: 1240px) {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
	}
`;
export const CardBody = styled.div`
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	align-items: left;
	@media only screen and (max-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

export const CardHeader = styled.div`
	background-color: #f4f4f4;
	@media only screen and (max-width: 1024px) {
		justify-content: center;
	}
`;

export const CardTitle = styled.h2`
	font-weight: 400;
	color: black;
	margin: 0;
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

export const CardValue = styled.div`
	font-size: 12px;
`;

export const Chart = styled.div`
	width: 100%;
	height: 50vh;
	margin: 12px;
`;

export const FilterHr = styled.hr`
	width: "100%";
`;

export const Button = styled.button`
	height: 35px;
	box-shadow: 0 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	background: #006bb9;
	margin-top: 10px;
	margin-bottom: 10px;
	color: white;
`;
