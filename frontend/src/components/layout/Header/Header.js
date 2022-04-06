import React, {useState} from "react";
import {Link} from "react-router-dom";

// Styles
import {HeaderStyled, StyledSubHeader} from "./Header.styles";
import {Container} from "theme/GlobalStyles";
import logo from "../../../assets/logos/logo.png";

const profilePicture =
    // "https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";
    "https://randomuser.me/api/portraits/men/21.jpg";

const Header = ({
	isLoggedIn = true,
	title,
	logoColor,
	headerColor,
	fontColor,
	justifyTitle,
	isTitleVisible = true,
}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const justifyTitleB = justifyTitle === "center" ? true : false;


	//
	return (
		<HeaderStyled justifyTitle={justifyTitleB} logoColor={logoColor}>
			<Container>
				<div className="header__container">
					<Link className="header__logo-group" to="/ads">
						<img src={logo} alt="ITAcademy Logo" className="header__logo" />
						<span className="header__logo-text">_directory</span>
					</Link>
					{isLoggedIn ? (
						<div className="header__profile">
							<button className="header__profile-button" onClick={handleClick}>
								<img
									className="header__profile-image"
									src={profilePicture}
									alt="Profile"
								/>
								<span className="header__profile-title">Mi perfil</span>
							</button>
							{dropdownVisible ? (
								<div className="header__profile-dropdown">
									<ul>
										<li>
											<Link to="/profile">Editar perfil</Link>
										</li>
										<li>
											<Link to="/my-bills">Mis facturas</Link>
										</li>
										<li>
											<Link to="/user-ads">Mis Anuncios</Link>
										</li>
										<li>
											<Link to="/new-ad">Publicar Anuncio</Link>
										</li>
										<li>
											<Link to="/">Cerrar sesión</Link>
										</li>
									</ul>
								</div>
							) : null}
						</div>
					) : null}
				</div>
			</Container>
			{/* {isTitleVisible && ( */}
			<StyledSubHeader
				headerColor={headerColor}
				fontColor={fontColor}
				justifyTitle={justifyTitleB}
			>
				<Container>
					<h1>{title}</h1>
				</Container>
			</StyledSubHeader>
			{/* )} */}
		</HeaderStyled>
	);

};

export default Header;
