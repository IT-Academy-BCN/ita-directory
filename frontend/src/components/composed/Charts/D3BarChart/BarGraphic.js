import React, {useEffect, useState} from "react";
import {useOptionSelectMonth} from "hooks/useOptionSelectMonth";
import {groupByTypeYear, groupByTypeMonth, daysBetween} from "utils/generateData";
import {getMonthLength, startingCutPerMonth, startingCutPerYear} from "utils/generalFilter";
import {allMonths} from "utils/constant";
import {returnMonthsData, dataLabels} from "./barGraphicConst";

//Font awesome icons
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {BarGraphicStyled} from "./BarGraphic.styles";
import D3BarChart from "./D3BarChart";

const BarGraphic = ({data, hideModal, active, size, year, month}) => {
	const [selectedYear, setSelectedYear] = useState(year);
	const [selectedMonth, setSelectedMonth] = useState(month);
	const [customData, setCustomData] = useState();

	useEffect(() => {
		setSelectedYear(year);
		setSelectedMonth(month);
		// eslint-disable-next-line
	}, [year, month]);

	const returnOptionsSelectYear = (startYear, lastYear) => {
		const years = [];
		let yearsDifference = lastYear - startYear + 1;

		for (let i = 0; i < yearsDifference; i++) {
			years.push(
				<option key={parseInt(startYear) + i} value={parseInt(startYear) + i}>
					{parseInt(startYear) + i}
				</option>
			);
		}
		return years;
	};

	const optionsSelectYear = returnOptionsSelectYear(
		data[0].day.getFullYear(),
		data[data.length - 1].day.getFullYear()
	);

	// Set graph options and data based on filters
	useEffect(() => {
		let customOptions = {
			data: [],
			xAxis: [],
			labels: [],
		};

		let yearToFilterLength = daysBetween(`${selectedYear}-01-01`, `${selectedYear}-12-31`);
		const startingCut = startingCutPerYear(data[0].day, parseInt(selectedYear));

		const yearToFilterData = data.slice(
			parseInt(startingCut),
			parseInt(startingCut) + parseInt(yearToFilterLength)
		);

		let monthToFilterLength = getMonthLength(selectedYear, selectedMonth);
		const corteInicialMes = startingCutPerMonth(
			parseInt(selectedYear),
			parseInt(selectedMonth)
		);
		const monthToFilterData = yearToFilterData.slice(
			parseInt(corteInicialMes),
			parseInt(corteInicialMes) + parseInt(monthToFilterLength)
		);

		let newData =
			selectedMonth === "all"
				? groupByTypeYear(yearToFilterData)
				: groupByTypeMonth(monthToFilterData);
		newData.forEach((item) => customOptions.data.push(item.data));

		customOptions.xAxis =
			selectedMonth === "all"
				? returnMonthsData(allMonths, "shortName")
				: [returnMonthsData(allMonths, "name")[selectedMonth]];

		customOptions.labels = dataLabels;

		setCustomData(customOptions);
	}, [selectedMonth, selectedYear, data]);

	// handlers
	const handleYearChange = (e) => {
		setSelectedYear(e.target.value);
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<BarGraphicStyled>
			<div className="header">
				<h2> Ventas anuales por tipo </h2>
				<div className="selectorWrapper">
					<select value={selectedMonth} onChange={handleMonthChange}>
						<option value="all">All</option>
						{useOptionSelectMonth()}
					</select>
					<select value={selectedYear} onChange={handleYearChange}>
						{optionsSelectYear}
					</select>
					<button onClick={hideModal}>
						<FontAwesomeIcon icon={active ? faTimes : faExternalLinkAlt} />
					</button>
				</div>
			</div>
			<D3BarChart data={customData} size={size} selectedMonth={selectedMonth} />
		</BarGraphicStyled>
	);
};

export default BarGraphic;
