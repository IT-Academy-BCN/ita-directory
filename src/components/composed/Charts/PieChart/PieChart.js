import {useState} from "react";
import PieGraphic from "./PieGraphic";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

export const PieChart = ({data, size}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	console.log("active", active);

	return (
		<div>
			<PieGraphic data={data} size={size} active={active} hideModal={() => hideModal()} />
			<ModalGraphic
				active={active}
				hideModal={hideModal}
				children={
					<PieGraphic
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
export default PieChart;
