import React, {useState} from "react";
import {logout} from "utils";

// Styles
import Colors from "theme/Colors";

const Login = () => {
	const [nombreUsuario, setNombreUsuario] = useState("");

	const pinchadoBoton = () => {
		setNombreUsuario("Kevin");
	};

	return (
		<div style={{backgroundColor: Colors.mainColor}}>
			Pantalla de Login para {nombreUsuario}
		</div>
	);
};

export default Login;
