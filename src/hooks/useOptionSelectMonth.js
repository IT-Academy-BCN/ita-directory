import {useState, useEffect} from "react";
import {allMonths} from "utils/constant";

/* 
	Carga la selección de meses para todas las graficas. Dependiendo de window.innerWidth <= 800
	utiliza la abreviatura o la forma completa.
 	Se utiliza en: GlobalFilter, BarGraphic, LineGraphic, PieGraphic.  */
const getIsMobile = () => window.innerWidth <= 768;
export const useOptionSelectMonth = () => {
	const [isMobile, setIsMobile] = useState(getIsMobile());
	const [optionMonth, setOptionMonth] = useState();
	useEffect(() => {
		function handleResize() {
			if (isMobile !== getIsMobile()) {
				setIsMobile(getIsMobile());
			}
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, [isMobile]);
	useEffect(() => {
		const optionsSelectMonth = () => {
			let optionsSelectMonth = [];
			for (let i = 0; i < Object.entries(allMonths).length; i++) {
				const el = !isMobile ? allMonths[i].name : allMonths[i].shortName;
				optionsSelectMonth.push(
					<option key={i} value={i}>
						{el}
					</option>
				);
			}
			return optionsSelectMonth;
		};
		setOptionMonth(optionsSelectMonth(isMobile));
	}, [isMobile]);
	return optionMonth;
};
