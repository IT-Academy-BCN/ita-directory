export const tooltipFormatter = (params) => {
	if (params instanceof Array) {
		if (params.length) {
			let message = "";
			message += `<b>${params[0].axisValueLabel}</b>`;
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
		message += `${params[0].axisValueLabel}`;
		message += `<br/>${params.marker}${params.seriesName}: <span style="float:right;"><b>${
			params.value
		}</b>${params.data.unit || ""}</b></span>`;
		return message;
	}
};

export const thousandFormatter = (value) => value;
