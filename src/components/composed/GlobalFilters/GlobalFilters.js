import React, {useState} from "react";

import {
	Card,
	CardHeader,
	CardTitle,
	CardSelector,
	CardSelectorWrapper,
} from "./GlobalFilters.styles";
import {optionsSelectMonth} from "./defaultOptions";

function GlobalFilters() {
	const [selectedYear, setSelectedYear] = useState("2016");
	const [selectedMonth, setSelectedMonth] = useState("all");

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
		setSelectedYear(e.target.value);
	};

	const handleMonthChange = (e) => {
		setSelectedMonth(e.target.value);
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle> Aplicar filtros globales: </CardTitle>
					<CardSelectorWrapper>
						<CardSelector defaultValue={selectedMonth} onChange={handleMonthChange}>
							<option value="all">All</option>
							{optionsSelectMonth}
						</CardSelector>
						<CardSelector defaultValue={selectedYear} onChange={handleYearChange}>
							{optionsSelectYear}
						</CardSelector>
					</CardSelectorWrapper>
				</CardHeader>
			</Card>
		</>
	);
}

export default GlobalFilters;
