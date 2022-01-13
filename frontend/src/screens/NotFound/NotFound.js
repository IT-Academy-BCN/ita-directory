import React from "react";
import {Container} from "./NotFound.styles";
import {Link} from "react-router-dom";

function NotFound() {
	return (
		<Container>
			<h1 className="notfound-error">404</h1>
			<p className="error-message">
				{" "}
				Ops, parece que la página que estas buscando no existe{" "}
			</p>
			<Link className="home-button" to="/">
				{" "}
				Vuelve a la página de inicio{" "}
			</Link>
			<p> Si se trata de un error, ponte en contacto. </p>
			<Link className="contact" to="/login">
				Contacto
			</Link>
		</Container>
	);
}

export default NotFound;
