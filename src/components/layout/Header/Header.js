import React, {useState} from "react";
import {Link} from "react-router-dom";
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

const Header = ({
	isLoggedIn,
	title,
	color_logo,
	color_header,
	color_letra,
	justifyTitle,
	paddingTitle,
	paddingTitle2,
}) => {
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
						<Logo
							className={`logged`}
							color_logo={color_logo}
							justifyTitle={justifyTitle}
							paddingTitle={paddingTitle}
						>
							Logo Empresa
						</Logo>
						<StyledMiPerfil>
							<StyledButton onClick={handleClick} ref={handleClickTwo}>
								<StyledImg src={profilePicture} alt="profile" />
								<StyledText>Mi perfil</StyledText>
							</StyledButton>
							{dropdownVisible ? (
								<StyledDropdown>
									<StyledUl>
										<Link to="/Profile">
											<StyledLi>Editar perfil</StyledLi>
										</Link>
										<Link to="/Ad">
											<StyledLi>Mis Anuncios</StyledLi>
										</Link>
										<Link to="/CreateNewAd">
											<StyledLi>Publicar Anuncio</StyledLi>
										</Link>
										<Link to="/">
											<StyledLi>Cerrar sesión</StyledLi>
										</Link>
									</StyledUl>
								</StyledDropdown>
							) : null}
						</StyledMiPerfil>
					</HeaderWrapper>
				</Container>

				<StyledHeader
					className={`logged`}
					color_header={color_header}
					color_letra={color_letra}
					justifyTitle={justifyTitle}
					paddingTitle2={paddingTitle2}
				>
					<h1>{title}</h1>
				</StyledHeader>
			</>
		);
	} else {
		return (
			<div>
				<div>
					<Logo
						color_logo={color_logo}
						justifyTitle={justifyTitle}
						paddingTitle={paddingTitle}
					>
						{" "}
						Mi Empresa
					</Logo>
				</div>
				<StyledHeader
					color_header={color_header}
					color_letra={color_letra}
					justifyTitle={justifyTitle}
					paddingTitle={paddingTitle}
				>
					<h1>{title}</h1>
				</StyledHeader>
			</div>
		);
	}
};

export default Header;
