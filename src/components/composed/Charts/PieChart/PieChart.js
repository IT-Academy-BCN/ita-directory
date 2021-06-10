import {useState} from "react";
import PieGraphic from "./PieGraphic";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

export const PieChart = ({data, size, year, month}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	console.log("active", active);

	return (
		<div>
			<PieGraphic
				data={data}
				size={size}
				active={active}
				hideModal={() => hideModal()}
				year={year}
			/>
			<ModalGraphic
				active={active}
				hideModal={hideModal}
				children={
					<PieGraphic
						data={data}
						size={size}
						active={active}
						hideModal={() => hideModal()}
						year={year}
					/>
				}
			/>
		</div>
	);
};
export default PieChart;
