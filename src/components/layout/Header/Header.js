import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
	Logo,
	StyledHeader,
	StyledImg,
	StyledButton,
	StyledMiPerfil,
	StyledText,
	Dropdown,
	HeaderWrapper,
} from "./Header.styles";
import {Container} from "theme/GlobalStyles";

const profilePicture =
	"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";

const Header = ({isLoggedIn, title}) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const handleClick = () => {
		setDropdownVisible(!dropdownVisible);
	};

	if (isLoggedIn) {
		return (
			<>
				<Container>
					<HeaderWrapper>
						<Logo className={`logged`}>Logo Empresa</Logo>
						<StyledMiPerfil>
							<StyledButton
								onClick={handleClick}
								className={dropdownVisible ? "selected" : ""}
							>
								<StyledImg src={profilePicture} alt="profile" />
								<StyledText>Mi perfil</StyledText>
							</StyledButton>
							{dropdownVisible ? (
								<Dropdown>
									<li>
										<Link to="/Profile">Editar perfil</Link>
									</li>

									<li>
										<Link to="/Ad">Mis Anuncios</Link>
									</li>

									<li>
										<Link to="/CreateNewAd">Publicar Anuncio</Link>
									</li>

									<li>
										<Link to="/">Cerrar sesión</Link>
									</li>
								</Dropdown>
							) : null}
						</StyledMiPerfil>
					</HeaderWrapper>
				</Container>

				<StyledHeader className={`logged`}>
					<Container>
						<h1>{title}</h1>
					</Container>
				</StyledHeader>
			</>
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
