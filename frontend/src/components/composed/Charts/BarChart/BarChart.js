import {useState} from "react";
import BarGraphic from "./BarGraphic";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

export const BarChart = ({data, size, year, month}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	return (
		<div>
			<BarGraphic
				data={data}
				active={active}
				size={size}
				hideModal={() => hideModal()}
				year={year}
				month={month}
			/>
			<ModalGraphic
				active={active}
				hideModal={hideModal}
				children={
					<BarGraphic
						data={data}
						active={active}
						size={size}
						hideModal={() => hideModal()}
						year={year}
						month={month}
					/>
				}
			/>
		</div>
	);
};
export default BarChart;
