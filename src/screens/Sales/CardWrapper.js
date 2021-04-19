import React, {useState} from "react";
import BarChart from "components/composed/Chart/BarChart/BarChart";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";
import {generateData} from "utils/generateData";

const data = generateData("2012-01-01", "2016-12-31", [10, 20]);

function CardWrapper() {
	const [active, setActive] = useState(false);

	return (
		<>
			<BarChart data={data} active={active} hideModal={() => setActive(!active)} />
			<ModalGraphic
				active={active}
				hideModal={() => setActive(!active)}
				children={
					<BarChart data={data} active={active} hideModal={() => setActive(!active)} />
				}
			/>
		</>
	);
}
export default CardWrapper;
