import React, {useRef, useEffect} from "react";
import * as echarts from "echarts";

function Chart({options}) {
	const chartRef = useRef(null);

	useEffect(() => {
		const chart = echarts.init(chartRef.current);
		chart.setOption(options);
	}, [options]);

	return <div style={{width: "100%", height: "80vh"}} ref={chartRef}></div>;
}

export default Chart;
