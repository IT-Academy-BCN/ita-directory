/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import {generateData} from "utils/generateData";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

const data = generateData("2012-01-01", "2016-12-31", [10, 20]);

function Sales() {
	const [active, setActive] = useState(false);

	return (
		<Body title="Ventas por categoría" isLoggedIn={true}>
			<BarChart data={data} active={active} hideModal={() => setActive(!active)} />
			<ModalGraphic
				active={active}
				hideModal={() => setActive(!active)}
				children={
					<BarChart data={data} active={active} hideModal={() => setActive(!active)} />
				}
			/>
		</Body>
	);
}

export default Sales;
