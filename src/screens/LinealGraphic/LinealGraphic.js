import Body from "components/layout/Body/Body";
import React from "react";

// import styles
import {CardChart, CardHeader, CardHeaderTitle, CardHeaderSelect} from "./LinealGraphic.styles";

function LinealGraphic() {
	return (
		<Body title="Ventas mensuales" isLoggedIn={true}>
			<CardChart>
				<CardHeader>
					<CardHeaderTitle>Ventas mensuales 2020</CardHeaderTitle>
					<CardHeaderSelect>
						<option value="volvo">Months</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</CardHeaderSelect>
				</CardHeader>
			</CardChart>
		</Body>
	);
}

export default LinealGraphic;
