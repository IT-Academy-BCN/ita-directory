import React, {useState} from "react";
import {
	Logo,
	StyledHeader,
	StyledHeaderTop,
	StyledImg,
	StyledDropdown,
	StyledLi,
	StyledButton,
	StyledMiPerfil,
	StyledText,
	StyledUl,
} from "./Header.styles";

const profilePicture =
	"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";

const Header = ({isLoggedIn, title}) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const handleClick = () => {
		console.log("profile clicked");
		setDropdownVisible(!dropdownVisible);
	};

	const handleClickTwo = (e) => {
		console.log(e.getBoundingClientRect());
		const rec = e.getBoundingClientRect();
		console.loge(rec` rec`);
	};
	if (isLoggedIn) {
		return (
			<header>
				<StyledHeaderTop className={`logged`}>
					<Logo className={`logged`}>Logo Empresa</Logo>
					<StyledMiPerfil>
						<StyledButton onClick={handleClick}>
							<StyledImg src={profilePicture} alt="profile" />
							<StyledText>Mi perfil</StyledText>
						</StyledButton>
						{dropdownVisible ? (
							<StyledDropdown ref={handleClickTwo}>
								<StyledUl>
									<StyledLi>Editar perfil</StyledLi>
									<StyledLi>Mis Anuncios</StyledLi>
									<StyledLi>Publicar Anuncio</StyledLi>
									<StyledLi>Cerrar sesión</StyledLi>
								</StyledUl>
							</StyledDropdown>
						) : null}
					</StyledMiPerfil>
				</StyledHeaderTop>
				<StyledHeader className={`logged`}>
					<h1>{title}</h1>
				</StyledHeader>
			</header>
		);
	} else {
		return (
			<div>
				<Logo> Mi Empresa</Logo>
				<StyledHeader>
					<h1>{title}</h1>
				</StyledHeader>
			</div>
		);
	}
};

export default Header;
