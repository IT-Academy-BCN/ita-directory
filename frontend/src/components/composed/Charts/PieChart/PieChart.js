import {useState} from "react";
import PieGraphic from "./PieGraphic";
import PieGraphicWithD3 from "./PieGraphicWithD3";
import ModalGraphic from "components/composed/ModalGraphic/ModalGraphic";

export const PieChart = ({data, size, year, month}) => {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);

	console.log("active", active);

	return (
		<div>
			<PieGraphicWithD3
				data={data}
				size={size}
				active={active}
				hideModal={() => hideModal()}
				year={year}
				month={month}
			/>
			{/* <PieGraphic
				data={data}
				size={size}
				active={active}
				hideModal={() => hideModal()}
				year={year}
				month={month}
			/> */}
			{/* <ModalGraphic
				active={active}
				hideModal={hideModal}
				children={
					<PieGraphic
						data={data}
						size={size}
						active={active}
						hideModal={() => hideModal()}
						year={year}
						month={month}
					/>
				}
			/> */}
		</div>
	);
};
export default PieChart;
