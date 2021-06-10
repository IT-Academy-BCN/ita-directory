import styled from "styled-components";
import SelectArrow from "assets/images/select-arrow.svg";
import Colors from "theme/Colors";

export const CardChart = styled.div`
	min-width: 100%;
	min-height: calc(90vh - 10rem - 120px);
	box-shadow: 0 3px 6px #00000029;
	border: 1px solid #ddd;
	border-radius: 6px;
	overflow: hidden;
	background: ${Colors.white};
`;

export const CardHeader = styled.div`
	display: flex;
	height: auto;
	background-color: #e22e2e;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 0.5rem 2rem;
	}
`;

export const CardTitle = styled.h2`
	font-weight: 400;
	color: white;
`;

//Afecta a los selectores de los modals
export const CardSelector = styled.select`
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
	background-image: url(${SelectArrow});
	background-position: 95% 50%;
	background-repeat: no-repeat;
	background-size: 15px 12px;
	background-color: #fff;
`;

export const CardSelectorWrapper = styled.div`
	display: flex;
	align-items: center;
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

//Propiedades dentro de la gráfica
export const Chart = styled.div`
	width: 53vw;
	height: 50vh;
	margin: 12px;

	@media (max-width: 1025px) {
		width: 100%;
		height: 50vh;
	}
`;
