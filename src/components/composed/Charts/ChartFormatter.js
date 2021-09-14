import {allMonths} from "utils/constant";

// Funcion que retorna el nombre del mes dado el valor del yaxis
const getMonthName = (value) => {
	let month = "";
	for (let i = 0; i < Object.entries(allMonths).length; i++) {
		if (value === allMonths[i].shortName) month = allMonths[i].name;
	}
	return month;
};

//Funcion que retorna el valor para evitar la , en los valores mayores a  999
export const thousandFormatter = (value) => value;

/*Funcion que crea un nuevo formato de tooltip para ser usado en las graficas
- Mostramos el nombre del mes entero como titulo
- Reformateamos el contenido
- Devolvemos todos los valores y evitamos la , al tener un valor mayor a 999
*/
export const tooltipFormatter = (params) => {
	console.log(params);
	if (params instanceof Array) {
		if (params.length) {
			let message = "";
			if (params[0].axisValueLabel)
				message += `<b>${getMonthName(params[0].axisValueLabel)}</b>`;
			params.forEach((param) => {
				message += `<br/>${param.marker}${param.seriesName}:<span style="float:right"><b>${
					param.value
				}${param.data.unit || ""}</b></span>`;
			});
			return message;
		} else {
			return null;
		}
	} else {
		let message = "";
		if (params.axisValueLabel) message += `${getMonthName(params.axisValueLabel)}<br/>`;
		message += `${params.marker}${params.name}: <span style="float:right;"><b>${
			params.value
		}</b>${params.data.unit || ""}</b></span>`;
		return message;
	}
};
