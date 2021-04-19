import {useState} from "react";
import Graphic from "./Graphic";
import Modal from "components/composed/Modal/Modal";

export const LineChart = ({data}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	console.log("active", active);

	return (
		<>
			<Graphic data={data} active={active} hideModal={() => hideModal()} />
			<Modal
				active={active}
				hideModal={hideModal}
				children={<Graphic data={data} active={active} hideModal={() => hideModal()} />}
			/>
		</>
	);
};
