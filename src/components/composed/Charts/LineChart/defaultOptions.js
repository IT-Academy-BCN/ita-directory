//Check if device is moible
let isMobile = window.innerWidth <= 550 ? true : false;

let config = {
	rotate: 90,
	align: "left",
	verticalAlign: "middle",
	position: "insideBottom",
	distance: 15,
	margin: 20,
};

let labelOption = {
	show: false,
	position: config.position,
	distance: config.distance,
	align: config.align,
	verticalAlign: config.verticalAlign,
	rotate: config.rotate,
	margin: config.margin,
	formatter: "{c}  {name|{a}}",
	fontSize: 16,
	rich: {
		name: {},
	},
};

export const options = {
	title: {
		text: "",
	},
	tooltip: {},
	xAxis: {
		type: "category",
		axisTick: {show: false},
		data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	},
	yAxis: {
		//If device is mobile, we rotate labels and reduce size
		axisLabel: isMobile
			? {
					fontSize: 8,
					rotate: 90,
			  }
			: {},
	},
	series: [
		{
			name: "Sales",
			type: "line",
			label: labelOption,
			data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
		},
	],
};
