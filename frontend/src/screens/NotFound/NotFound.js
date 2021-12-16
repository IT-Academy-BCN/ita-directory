import React from "react";
import { Container} from "./NotFound.styles"
import {Link} from "react-router-dom";


function NotFound() {
	return (
		<Container>
			
			<h1 className="http__Message">404</h1>
			<p className="error__Mess"> Ops, parece que la página que estas buscando no existe </p>
			<Link className="backHome__Link" to="/"> Vuelve a la página de inicio </Link>
			<p> Si se trata de un error, ponte en contacto. </p>
			<Link className="contact__Link" to="/login" >Contacto</Link>
		</Container>
	);
}

export default NotFound;
