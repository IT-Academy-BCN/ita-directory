import React, {useState} from "react";
import {Link} from "react-router-dom";

// Styles
import {HeaderStyled} from "./Header.styles";
import {Container} from "theme/GlobalStyles";

const profilePicture =
	"https://sites.google.com/site/ellibrorojoesdla/_/rsrc/1349808591712/personajes/ganda/Gandalf.jpg";

const Header = ({
	isLoggedIn,
	title,
	color_logo,
	color_header,
	color_letra,
	centerTitle = false,
}) => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const handleClick = () => {
		setDropdownVisible(!dropdownVisible);
	};

	return (
		<HeaderStyled centerTitle={centerTitle}>
			<Container>
				<div className="top-header">
					<h2 className="logo" color_logo={color_logo}>
						Logo Empresa
					</h2>
					{isLoggedIn ? (
						<div className="profile">
							<button className="profile" onClick={handleClick}>
								<img src={profilePicture} alt="Profile" />
								<span>Mi perfil</span>
							</button>
							{dropdownVisible ? (
								<div className="dropdown">
									<ul>
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
									</ul>
								</div>
							) : null}
						</div>
					) : null}
				</div>
			</Container>
			<div className="sub-header">
				<Container>
					<h1>{title}</h1>
				</Container>
			</div>
		</HeaderStyled>
	);
};

export default Header;
