import React, {useState} from "react";
import {
	Logo,
	StyledHeader,
	StyledImg,
	StyledDropdown,
	StyledLi,
	StyledButton,
	StyledMiPerfil,
	StyledText,
	StyledUl,
	HeaderWrapper,
} from "./Header.styles";
import {Container} from "theme/GlobalStyles";

const profilePicture =
	"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";

const Header = ({isLoggedIn, title}) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const handleClick = () => {
		console.log("profile clicked");
		setDropdownVisible(!dropdownVisible);
	};

	const handleClickTwo = (e) => {
		/*  const rect = e.getBoundingClientRect()
        console.log(rect)
		
        const right = rect.right
        console.log(right) 
		 */
	};

	if (isLoggedIn) {
		return (
			<>
				<Container>
					<HeaderWrapper>
						<Logo className={`logged`}>Logo Empresa</Logo>
						<StyledMiPerfil>
							<StyledButton onClick={handleClick} ref={handleClickTwo}>
								<StyledImg src={profilePicture} alt="profile" />
								<StyledText>Mi perfil</StyledText>
							</StyledButton>
							{dropdownVisible ? (
								<StyledDropdown>
									<StyledUl>
										<StyledLi>Editar perfil</StyledLi>
										<StyledLi>Mis Anuncios</StyledLi>
										<StyledLi>Publicar Anuncio</StyledLi>
										<StyledLi>Cerrar sesión</StyledLi>
									</StyledUl>
								</StyledDropdown>
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
