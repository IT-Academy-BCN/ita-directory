import React, {useState} from "react";
import MapView from "./MapView";

const Component1 = () => {
	return <h1>Componente1 sin mapa</h1>;
};

const GoTo = () => {
	const [showMap, setShowMap] = useState(false);
	return (
		<div>
			<button onClick={() => setShowMap(!showMap)}>
				{!showMap ? "Show Map" : "Hide map"}
			</button>
			{showMap ? <MapView /> : <Component1 />}
		</div>
	);
};

export default GoTo;
