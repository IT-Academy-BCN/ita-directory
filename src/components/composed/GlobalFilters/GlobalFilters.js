import React from "react";
import {GlobalFiltersStyled} from "./GlobalFilters.styles";
import {optionsSelectMonth} from "./defaultOptions";

function GlobalFilters({onYearChange, onMonthChange}) {
	const startYear = 2012;
	const endYear = 2016;
	const yearDifference = endYear - startYear;
	const optionsSelectYear = [];
	for (let i = 0; i < yearDifference + 1; i++) {
		const curYear = startYear + i;
		optionsSelectYear.push(
			<option value={curYear} key={curYear}>
				{curYear}
			</option>
		);
	}

	// handlers
	const handleYearChange = (e) => {
		onYearChange(e.target.value);
	};

	const handleMonthChange = (e) => {
		onMonthChange(e.target.value);
	};

	return (
		<GlobalFiltersStyled>
			<div className="header">
				<h2> Aplicar filtros globales:</h2>
				<div className="selectorWrapper">
					<select defaultValue={"all"} onChange={handleMonthChange}>
						<option value="all">All</option>
						{optionsSelectMonth}
					</select>
					<select defaultValue={"2016"} onChange={handleYearChange}>
						{optionsSelectYear}
					</select>
				</div>
			</div>
		</GlobalFiltersStyled>
	);
}

export default GlobalFilters;
