import React from "react";
import StyledFooter from "./styles";

const Footer = ({logo, text2, text3}) => {
	return (
		<StyledFooter>
			<div className="logo">LOGO EMPRESA</div>
			<div className="information">
				<div className="copyright"> ©miempresa.com </div>
				<div className="rights"> Todos los derechos reservados.</div>
				<div className="legal">
					<a href="https://www.google.com/">Aviso Legal -</a>
					<a href="https://www.google.com/">Privacidad -</a>
					<a href="https://www.google.com/"> Cookies</a>
				</div>
			</div>
		</StyledFooter>
	);
};

export default Footer;
