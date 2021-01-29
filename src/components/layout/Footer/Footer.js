import React from "react";
import {
	Anchor,
	Copyright,
	Rights,
	Information,
	Legal,
	Logo,
	LogoText,
	StyledFooter,
} from "./styles";

const Footer = () => {
	return (
		<StyledFooter>
			<Logo>
				<LogoText>LOGO EMPRESA </LogoText>
			</Logo>
			<Information>
				<Copyright> ©miempresa.com </Copyright>
				<Rights> Todos los derechos reservados.</Rights>
				<Legal>
					<Anchor href="https://www.google.com/">Aviso Legal</Anchor>
					<Anchor href="https://www.google.com/">Privacidad</Anchor>
					<Anchor href="https://www.google.com/"> Cookies</Anchor>
				</Legal>
			</Information>
		</StyledFooter>
	);
};

export default Footer;
