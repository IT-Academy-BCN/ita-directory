import React from "react";

// Styles
import {
	LogoAndCredits,
	Logo,
	Credits,
	Anchor,
	Rights,
	Information,
	Legal,
	StyledFooter
  } from "./Footer.styles";
import {Container} from "theme/GlobalStyles";
import logo from "../../../assets/logos/logo.png"

const Footer = () => {
	return (
		
			<Container column>
			  <StyledFooter>
				<LogoAndCredits>
				  <Logo><img src={logo} alt="corporate logo"/></Logo>
				  <Credits>
					<p>
					  Diseñado por <span>Kevin Mamaqui</span>
					</p>
					<p>
					  para <span>ITAcademy de Barcelona Activa</span>
					</p>
				  </Credits>
				</LogoAndCredits>
				<Information>
				  <Rights>Todos los derechos reservados.</Rights>
				  <Legal>
					<Anchor href="#">Aviso Legal</Anchor>-
					<Anchor href="#">Privacidad</Anchor>-
					<Anchor href="#">Cookies</Anchor>
				  </Legal>
				</Information>
			  </StyledFooter>
			</Container>
	)
	
};

export default Footer;
