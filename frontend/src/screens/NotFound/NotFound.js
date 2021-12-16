import React from "react";
import { Container, BackHomeLink, HttpMess, ErrorMess, AskToContact, ContactLink} from "./NotFound.styles"


function NotFound() {
	return (
		<Container>
			
			<HttpMess>404</HttpMess>
			<ErrorMess> Ops, parece que la página que estas buscando no existe </ErrorMess>
			<BackHomeLink to="/"> Vuelve a la página de inicio </BackHomeLink>
			<AskToContact> Si se trata de un error, ponte en contacto. </AskToContact>
			<ContactLink to="/login" >Contacto</ContactLink>
		</Container>
	);
}

export default NotFound;
