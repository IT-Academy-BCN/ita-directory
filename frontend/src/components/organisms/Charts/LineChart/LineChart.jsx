import ModalGraphic from "../../ModalGraphic/ModalGraphic";
import React, {useState} from "react";
import LineGraphic from "./LineGraphic";

export default function LineChart({data, size, month, year}) {
	const [active, setActive] = useState(false);
	const hideModal = () => setActive(!active);
	return (
		<div>
			<LineGraphic
				data={data}
				active={active}
				hideModal={() => hideModal()}
				size={size}
				month={month}
				year={year}
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
}
