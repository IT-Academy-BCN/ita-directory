import React, {Fragment} from "react";

import {
	Card,
	CardHeader,
	CardTitle,
	CardSelector,
	CardSelectorWrapper,
} from "./GlobalFilters.styles";
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
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle> Aplicar filtros globales:</CardTitle>
					<CardSelectorWrapper>
						<CardSelector defaultValue={"all"} onChange={handleMonthChange}>
							<option value="all">All</option>
							{optionsSelectMonth}
						</CardSelector>
						<CardSelector defaultValue={"2016"} onChange={handleYearChange}>
							{optionsSelectYear}
						</CardSelector>
					</CardSelectorWrapper>
				</CardHeader>
			</Card>
		</Fragment>
	);
}

export default GlobalFilters;
