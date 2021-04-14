import React, {useState, useRef, useEffect} from "react";
import * as echarts from "echarts";
import {daysBetween, groupByMonth, getByDays} from "utils/generateData";
import {FiExternalLink} from "react-icons/fi";
//import {RiArrowDownSFill} from "react-icons/ri";

// import styles
import {
	CardChart,
	CardHeader,
	CardHeaderTitle,
	CardHeaderSelect,
	CardBody,
	CardOpenModal,
	CardSelectWrapper,
} from "./LinealGraphic.styles";

const options = {
	title: {
		text: "",
	},
	tooltip: {},
	xAxis: {
		data: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
	},
	yAxis: {},
	series: [
		{
			name: "sales",
			type: "line",
			data: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
		},
	],
};

/*
		1. ARRAY DE DATOS DE DÍAS CON VALORES ENTRE 2012 y 2016.
		2. POR DEFECTO TENGO SELECCIONADO EL AÑO 2016.

		Y QUIERO
				RESPRESENTAR POR MESES DEL CORRESPONDIENTE AÑO

		POR LO TANTO
		1. LO PRIMERO PARA AGRUPAR ESOS DATOS POR AÑO
				ES TENER LOS CORRESPONDIENTES AL AÑO POR DEFECTO.
		2. AGRUPAR LOS DÍAS DEL AÑO EN MESES
 */

function LinealGraphic({data}) {
	const lineChartRef = useRef(null);
	const [curChart, setCurChart] = useState(undefined);

	useEffect(() => {
		if (lineChartRef !== null && curChart === undefined)
			setCurChart(echarts.init(lineChartRef.current));
		// eslint-disable-next-line
	}, [lineChartRef]);

	const [selectedYear, setSelectedYear] = useState("2016");
	const [detail, setDetail] = useState("all");
	const monthsLabel = [
		"Ene",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Ago",
		"Sep",
		"Oct",
		"Nov",
		"Dic",
	];

	useEffect(() => {
		if (curChart !== undefined) {
			// Obtengo días entre el 1 de Enero y 31 de Diciembre del año correspondiente
			const daysLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);

			// Determinar length del array según el año elegido
			const calculateDataLength = (selectedYear) => {
				let dataLength = data.length;
				let years = 2016 - selectedYear;
				let selYear = parseInt(selectedYear);

				for (let i = 0; i < years; i++) {
					dataLength -= daysBetween(`${selYear + i}-01-01`, `${selYear + i}-12-31`);
				}
				return dataLength;
			};

			// De los datos totales, corto el array.
			// 1. Calculo la posición hasta dónde cortar
			let sliceEnd = calculateDataLength(selectedYear);
			// 2. Corto el array hasta la posición calculada
			let daysYearData = 0;
			selectedYear !== 2012
				? (daysYearData = data.slice(sliceEnd - daysLength, sliceEnd))
				: (daysYearData = data.slice(0, daysLength));

			const monthValues = groupByMonth(daysYearData);

			const monthLength = (year, month) => {
				let numMonth = parseInt(month) + 1;
				let numYear = parseInt(year);
				return new Date(numYear, numMonth, 0).getDate();
			};

			// Filter by month
			const daysInMonth = monthLength(selectedYear, detail);
			const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);
			const sliceMonth = (year, month) =>
				daysBetween(`${year}-01-01`, `${year}-${addLeadingZero(month + 1)}-01`) - 1;
			const sliceInitialPoint = sliceMonth(parseInt(selectedYear), parseInt(detail));

			let daysMonthData = 0;
			detail !== "all" && detail !== "0"
				? (daysMonthData = daysYearData.slice(
						sliceInitialPoint,
						sliceInitialPoint + daysInMonth
				  ))
				: (daysMonthData = daysYearData.slice(0, daysInMonth));

			const dayValues = getByDays(daysMonthData);

			// Labels x-axis
			const daysLabel = (selectedMonth, selectedYear) => {
				const numSelectedMonth = parseInt(selectedMonth);
				const numSelectedYear = parseInt(selectedYear);
				const monthSelectedLength = monthLength(numSelectedYear, numSelectedMonth);
				const daysLabel = [];
				for (let i = 0; i < monthSelectedLength; i++) {
					daysLabel.push(i + 1);
				}
				return daysLabel;
			};

			const xAxis = detail === "all" ? monthsLabel : daysLabel(detail, selectedYear);

			options.series[0].data = detail === "all" ? monthValues : dayValues;
			options.xAxis.data = xAxis;
			const lineChart = echarts.init(lineChartRef.current);
			lineChart.setOption({...options});
		}
		// eslint-disable-next-line
	}, [data, selectedYear, detail]);

	const resizeChart = () => {
		curChart.resize();
	};

	// Resize the chart when window resizes
	useEffect(() => {
		if (curChart !== undefined) {
			window.addEventListener("resize", resizeChart);
			return () => {
				window.removeEventListener("resize", resizeChart);
			};
		}
		// eslint-disable-next-line
	}, [curChart]);

	return (
		<CardChart>
			<CardHeader>
				<CardHeaderTitle>Ventas mensuales {selectedYear}</CardHeaderTitle>
				<CardSelectWrapper>
					<CardHeaderSelect
						defaultValue={detail}
						onChange={(e) => setDetail(e.target.value)}
						//components={<RiArrowDownSFill style={{color: "black"}} />}
					>
						<option value="all">All</option>
						<option value="0">January</option>
						<option value="1">February</option>
						<option value="2">March</option>
						<option value="3">April</option>
						<option value="4">May</option>
						<option value="5">Juny</option>
						<option value="6">July</option>
						<option value="7">Agost</option>
						<option value="8">Septembre</option>
						<option value="9">Octobre</option>
						<option value="10">Novembre</option>
						<option value="11">Decembre</option>
					</CardHeaderSelect>
					<CardHeaderSelect
						defaultValue={selectedYear}
						onChange={(e) => setSelectedYear(e.target.value)}
					>
						<option value="2012">2012</option>
						<option value="2013">2013</option>
						<option value="2014">2014</option>
						<option value="2015">2015</option>
						<option value="2016">2016</option>
					</CardHeaderSelect>
					<CardOpenModal>
						<FiExternalLink />
					</CardOpenModal>
				</CardSelectWrapper>
			</CardHeader>
			<CardBody ref={lineChartRef}></CardBody>
		</CardChart>
	);
}

export default LinealGraphic;
