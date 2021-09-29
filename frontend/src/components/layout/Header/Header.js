import React, {useState} from "react";
import {Link} from "react-router-dom";

// Styles
import {HeaderStyled, StyledSubHeader} from "./Header.styles";
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
		<HeaderStyled centerTitle={centerTitle} color_logo={color_logo}>
			<Container>
				<div className="top-header">
					<Link className="logo" to="/ads">
						<h2>Logo Empresa</h2>
					</Link>
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
			<StyledSubHeader color_header={color_header} color_letra={color_letra}>
				<Container>
					<h1>{title}</h1>
				</Container>
			</StyledSubHeader>
		</HeaderStyled>
	);
};

export default Header;

/*
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
					<Link className="logo" to="/ads">
						<h2 color_logo={color_logo}>Logo Empresa</h2>
					</Link>
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
			<div className="sub-header">
				<Container>
					<h1>{title}</h1>
				</Container>
			</div>
		</HeaderStyled>
	);
};

export default Header;



*/
