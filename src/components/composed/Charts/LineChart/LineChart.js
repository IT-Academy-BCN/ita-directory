import {useState} from "react";
import LineGraphic from "./LineGraphic";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

export const LineChart = ({data, size, year, month}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	console.log("active", active);

	return (
		<div>
			<LineGraphic
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
					<LineGraphic
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
export default LineChart;
