import {useState} from "react";
import Body from "components/layout/Body/Body";
import LinealGraphic from "./LinealGraphic";
import {generateData, daysBetween} from "utils/generateData";
import Modal from "components/composed/Modal/Modal";

const initialDate = "2012-01-01";
const days = daysBetween(initialDate, "2016-12-31");
const data = generateData(new Date(initialDate), days, [30, 80]);

function Sales() {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	return (
		<Body title="Ventas mensuales" isLoggedIn={true}>
			<LinealGraphic data={data} active={active} hideModal={hideModal} />
			<Modal
				active={active}
				hideModal={hideModal}
				children={<LinealGraphic data={data} active={active} hideModal={hideModal} />}
			/>
		</Body>
	);
}

export default Sales;
