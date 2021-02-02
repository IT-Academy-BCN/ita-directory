import React from "react";
import {Wrapper, Anchor, Copyright, Rights, Information, Legal, Logo, StyledFooter} from "./styles";
// import Colors from "theme/Colors";

const Footer = () => {
	return (
		<Wrapper>
			<hr />
			<StyledFooter>
				<Logo>LOGO EMPRESA</Logo>
				<Information>
					<Copyright> ©miempresa.com </Copyright>
					<Rights> Todos los derechos reservados.</Rights>
					<Legal>
						<Anchor href="#">AvisoLegal</Anchor>
						<Anchor href="#">Privacidad</Anchor>
						<Anchor href="#">Cookies</Anchor>
					</Legal>
				</Information>
			</StyledFooter>
		</Wrapper>
	);
};

export default Footer;
