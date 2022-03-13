import React, {useState, useEffect, Fragment} from "react";
import * as d3 from "d3";
import {barColors, returnChartSize, returnLegendData} from "./barGraphicConst";
import {StyledSvg, ChartLegend, D3SvgChartContainer} from "./BarGraphic.styles";

const BarChartWithD3 = ({data, active, size, selectedMonth}) => {
	const [chartWidth, setChartWidth] = useState();
	const [chartHeight, setChartHeight] = useState();
	console.log(data);
	const [displayLabels, setLabels] = useState(false);

	const chartMargin = {top: 20, bottom: 20, left: 40, right: 40};

	useEffect(() => {
		setLabels(window.innerWidth < 992 ? false : true);
		reloadChart();
		// eslint-disable-next-line
	}, [data, active, chartWidth, chartHeight]);

	//Resize chart
	useEffect(() => {
		window.addEventListener("resize", () => reloadChart());
		return () => {
			window.removeEventListener("resize", () => reloadChart());
		};
		// eslint-disable-next-line
	}, []);

	const reloadChart = () => {
		const [width, height] = !active
			? returnChartSize([window.innerWidth, window.innerHeight])
			: [window.innerWidth * 0.95, window.innerHeight * 0.6];
		setChartWidth(width - chartMargin.left - chartMargin.right);
		setChartHeight(height - chartMargin.top - chartMargin.bottom);
		clearChart();
		drawChart();
	};

	const clearChart = () => {
		d3.selectAll(".bar-chart").selectAll("*").remove();
	};

	const drawLegend = (d) => {
		//Draw legend
		const listItems = d3
			.selectAll(".chart-legend")
			.select("ul")
			.selectAll("li")
			.data(d)
			.enter()
			.append("li");

		//Apend color dots
		listItems
			.append("svg")
			.attr("height", "1rem")
			.attr("width", "2.5rem")
			.append("rect")
			.attr("rx", "0.25rem")
			.attr("width", "2rem")
			.attr("height", "1rem")
			.attr("fill", (data) => data.color)
			.classed("dot", true);

		//Apend labels
		listItems
			.append("text")
			.text((data) => data.label)
			.classed("legend-text", true);
	};

	const drawXaxis = (chart, x) => {
		chart
			.append("g")
			.call(d3.axisBottom(x).tickSizeOuter(0))
			.attr("color", "gray")
			.attr("transform", `translate(0, ${chartHeight})`)
			.classed("xaxis", true);
	};

	const drawYaxis = (chart, y) => {
		chart
			.append("g")
			.call(d3.axisLeft(y).tickSizeOuter(0))
			.attr("color", "gray")
			.attr("x", chartMargin.left);
	};

	const drawChart = () => {
		if (data) {
			const ChartContainer = d3
				.selectAll(".bar-chart")
				.attr("width", chartWidth + chartMargin.left + chartMargin.left)
				.attr("height", chartHeight + chartMargin.top + chartMargin.bottom)
				.classed("chart", true);

			const chart = ChartContainer.append("g")
				.attr("x", chartMargin.left)
				.attr("y", chartMargin.top)
				.attr("transform", "translate(" + chartMargin.left + "," + chartMargin.top + ")");

			//Define chart ranges
			const x = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.1);
			const y = d3.scaleLinear().range([chartHeight, 0]);

			//Draw month data
			if (selectedMonth !== "all") {
				//Create month data
				let monthData = data.data.map((item, index) => {
					return {
						label: data.labels[index],
						value: item[0],
						color: barColors[index],
					};
				});
				// console.log("month", monthData)

				//Set domains
				x.domain(data.labels);
				y.domain([0, d3.max(monthData, (data) => data.value) + 200]);

				//Draw chart data
				chart
					.selectAll(".bar")
					.data(monthData)
					.enter()
					.append("rect")
					.attr("width", x.bandwidth())
					.attr("height", (data) => chartHeight - y(data.value))
					.attr("y", (data) => y(data.value))
					.attr("x", (data) => x(data.label))
					.attr("fill", (data) => data.color)
					.classed("bar", true);

				//Draw bar labels
				if (displayLabels) {
					chart
						.selectAll(".bar-label")
						.data(monthData)
						.enter()
						.append("text")
						.text((data) => `${data.value} ${data.label}`)
						.attr("x", (data) => x(data.label) + x.bandwidth() / 2)
						.attr("y", (data) => y(data.value / 2))
						.attr("text-anchor", "middle")
						.classed("bar-label", true);
				}
			}

			//Draw year data
			else {
				//Create year data to display
				let yearData = [];
				for (let index = 0; index < data.data[0].length; index++) {
					for (let j = 0; j < data.data.length; j++) {
						const item = {
							label: data.labels[j],
							value: data.data[j][index],
							color: barColors[j],
						};
						yearData.push(item);
					}
				}
				// console.log("year", yearData)

				//Set domains
				x.domain(yearData);
				y.domain([0, d3.max(data.data.map((item) => d3.max(item))) + 200]);

				//Draw chart data
				chart
					.selectAll(".bar")
					.data(yearData)
					.enter()
					.append("rect")
					.attr("width", x.bandwidth())
					.attr("height", (data) => chartHeight - y(data.value))
					.attr("y", (data) => y(data.value))
					.attr("x", (data) => x(data))
					.attr("fill", (data) => data.color)
					.attr("rx", "")
					.classed("bar", true);

				//Draw bar labels
				if (displayLabels) {
					chart
						.selectAll(".bar-label")
						.data(yearData)
						.enter()
						.append("text")
						.text((data) => `${data.value} ${data.label}`)
						.attr("transform", "rotate(-90)")
						.attr("x", -chartHeight / 2)
						.attr("y", (data) => x(data) + x.bandwidth() - x.bandwidth() / 4)
						.attr("font-size", 12)
						.attr("text-anchor", "middle")
						.classed("bar-label", true);
				}

				//Change domain to render xAxis
				x.domain(data.xAxis);
			}

			drawXaxis(chart, x);
			drawYaxis(chart, y);
			drawLegend(returnLegendData);
		}
	};

	return (
		<Fragment>
			<D3SvgChartContainer>
				<StyledSvg className="bar-chart" />
				<ChartLegend className="chart-legend">
					<ul />
				</ChartLegend>
			</D3SvgChartContainer>
		</Fragment>
	);
};

export default BarChartWithD3;
