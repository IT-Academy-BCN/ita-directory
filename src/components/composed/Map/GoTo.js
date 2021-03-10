import React, {useState} from "react";

const Component1 = () => {
	return <h1>Componente1 sin mapa</h1>;
};

const Component2 = () => {
	return <h1>Place MAP with fit Bounds</h1>;
};

const GoTo = () => {
	const [showMap, setShowMap] = useState(false);
	return (
		<div>
			<button onClick={() => setShowMap(!showMap)}>
				{!showMap ? "Show Map" : "Hide map"}
			</button>
			{showMap ? <Component2 /> : <Component1 />}
		</div>
	);
};

export default GoTo;
