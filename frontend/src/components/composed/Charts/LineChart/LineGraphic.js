import {useState, useEffect} from "react";
import React from "react";
import LineGraphicWithD3 from "./LineGraphicWithD3";
import {LineGraphicStyled} from "./LineChart.styles";
import {faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useOptionSelectMonth} from "hooks/useOptionSelectMonth";

export default function LineGraphic({data, active, hideModal, size, month, year}) {
	const [selectedYear, setSelectedYear] = useState(year);
	const [detail, setDetail] = useState(month);

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

	useEffect(() => {
		setSelectedYear(year);
		setDetail(month);
	}, [year, month]);

	return (
		<div>
			<LineGraphicStyled>
				<div className="cardHeader">
					<h2>Ventas anuales continuas</h2>
					<div className="selectorWrapper">
						<select value={detail} onChange={(e) => setDetail(e.target.value)}>
							<option value="all">All</option>
							{useOptionSelectMonth()}
						</select>
						<select
							value={selectedYear}
							onChange={(e) => setSelectedYear(e.target.value)}
						>
							{optionsSelectYear}
						</select>
						<button onClick={hideModal}>
							<FontAwesomeIcon
								icon={active ? faTimes : faExternalLinkAlt}
								style={{color: "#e22e2e"}}
							/>
						</button>
					</div>
				</div>
				<LineGraphicWithD3
					data={data}
					active={active}
					hideModal={() => hideModal()}
					size={size}
					month={detail}
					year={selectedYear}
				/>
			</LineGraphicStyled>
		</div>
	);
}
