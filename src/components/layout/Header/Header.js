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
	StyledLogo,
	StyledText,
	StyledUl,
} from "./styles";

const profilePicture =
	"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";

const Header = ({isLoggedIn, title}) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const handleClick = () => {
		console.log("profile clicked");
		setDropdownVisible(!dropdownVisible);
	};
	if (isLoggedIn) {
		return (
			<header>
				<StyledHeaderTop className={`logged`}>
					<Logo>Logo Empresa</Logo>
					<StyledMiPerfil>
						<StyledButton onClick={handleClick}>
							<StyledImg src={profilePicture} alt="profile" />
							<StyledText>Mi perfil</StyledText>
						</StyledButton>

						{dropdownVisible ? (
							<StyledDropdown>
								<StyledUl>
									<StyledLi>Editar perfil</StyledLi>
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
