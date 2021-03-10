import React from "react";

// Styles
import {Anchor, Copyright, Rights, Information, Legal, Logo, StyledFooter} from "./styles";
import {Container} from "theme/GlobalStyles";

const Footer = () => {
	return (
		<Container column>
			<StyledFooter>
				<Logo>LOGO EMPRESA</Logo>
				<Information>
					<Copyright>©miempresa.com</Copyright>
					<Rights>Todos los derechos reservados.</Rights>
					<Legal>
						<Anchor href="#">Aviso Legal</Anchor>-<Anchor href="#">Privacidad</Anchor>-
						<Anchor href="#">Cookies</Anchor>
					</Legal>
				</Information>
			</StyledFooter>
		</Container>
	);
};

export default Footer;
