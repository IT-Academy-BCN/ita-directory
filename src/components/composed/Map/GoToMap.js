import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const GoToMap = () => {
	const [state, setState] = useState({
		longitude: 0,
		latitude: 0,
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				setState({
					longitude: position.coords.longitude,
					latitude: position.coords.latitude,
				});
			},
			function (error) {
				console.error("Error Code = " + error.code + " - " + error.message);
			},
			{
				enableHighAccuracy: true,
			}
		);
	}, []);

	return (
		<div>
			<Link
				// anadir botone de switch aqui.
				to={{
					pathname: "/map",
					state,
				}}
			>
				MAP VIEW
			</Link>
		</div>
	);
};

export default GoToMap;
