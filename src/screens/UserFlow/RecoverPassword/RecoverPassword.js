//import
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Body from "components/layout/Body/Body";

// 0 SETUP
//- create component

//1 INPUT
// - importar archivos
// - declarar variables

//2 LOGICA CON EL INPUT- DATA PROCESSION
// - set useState
//- add methods();
// -add conditional rendering: if---else/swithc statement
//- add try-catch for error logic

//3 OUTPUT
//return form

//create COMPONENT
const RecoverPassword = (props) => {
	// - declarar variables

	//2 LOGICA CON EL INPUT- DATA PROCESSION
	// - set useState
	const [email, setEmail] = useState();

	//- add methods();
	// -add conditional rendering: if---else/swithc statement

	const changeEmail = () => {
		setEmail("");
	};

	//- add try-catch for error logic

	return (
		//add function to body to change password
		<Body title="Cambiar contraseña">
			<div>Aquí va la info de recoger password de:{userName}</div>
			<StyledForm id={id} className={className} email={email}>
				<Label>
					<strong>¿Has olvidado tu contraseña?</strong> Para recuperarla introduce tu
					email y te enviaremos una nueva por correo.
				</Label>
				<input>Email</input>
				<button>Enviar</button>
			</StyledForm>
			<Footer></Footer>

			<Link to="/login">tienes una cuenta? Inicia sesion</Link>
		</Body>
	);
};

export default RecoverPassword;
