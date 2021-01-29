import React, {useState} from "react";
import {Link} from "react-router-dom";
import Body from "components/layout/Body/Body";

const RecoverPassword = (props) => {
	const [email, setEmail] = useState();

	const changeEmail = () => {
		setEmail("");
	};
	return (
		//add function to body to change password
		<Body title="Cambiar contraseña">
			<div>Aquí va la info de recoger password de:{userName}</div>
			<StyledForm id={id} className={className} email={email}>
				<Label>
					<strong>¿Has olvidado tu contraseña?</strong> Para recuperarla introduce tu
					email y te enviaremos una nueva por correo.
				</Label>
				<input>Email </input>
				<button>Enviar</button>
			</StyledForm>
			<Footer></Footer>

			<Link to="/login">tienes una cuenta? Inicia sesion</Link>
		</Body>
	);
};

export default RecoverPassword;
