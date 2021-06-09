import {useState} from "react";
import BarGraphic from "./BarGraphic";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

export const BarChart = ({data, size}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	console.log("active", active);

	return (
		<div>
			<BarGraphic data={data} active={active} size={size} hideModal={() => hideModal()} />
			<ModalGraphic
				active={active}
				hideModal={hideModal}
				children={
					<BarGraphic
						data={data}
						size={size}
						active={active}
						hideModal={() => hideModal()}
					/>
				}
			/>
		</div>
	);
};
export default BarChart;
