import Body from "components/layout/Body/Body";
import {Container} from "theme/GlobalStyles.js";
import {StyledWrapper, StyledImage, StyledP} from "./ListaUsuariosAdmins.style";
import Colors from "theme/Colors";
import DataTable from "react-data-table-component";
import usuarios from "assets/usuarios.json";
import {people1b, people4b, people13b} from "assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserModal from "components/composed/UserModal/UserModal.js";
import React, {useState} from "react";
import {faUserClock} from "@fortawesome/free-solid-svg-icons";

function ListaUsuariosAdmins() {
	const images = [people1b, people4b, people13b];
	const [active, setActive] = useState(false);

	// Current user
	const [currentName, setCurrentName] = useState("");
	const [currentUserState, setCurrentUserState] = useState("active");

	const handleClick = (name, state) => {
		setCurrentName(name);
		setCurrentUserState(state);
		setActive(true);
	};

	const columns = [
		{
			name: <div>{<StyledP>Foto</StyledP>}</div>,
			selector: "foto",
			cell: (row) => (
				<div>
					{<StyledImage src={images[row.id]} alt="foto" width="70px" height="70px" />}
				</div>
			),
			sortable: true,
		},
		{
			name: <div>{<StyledP>Nombre</StyledP>}</div>,
			selector: "nombre",
			cell: (row) => <div>{<StyledP>{row.nombre}</StyledP>}</div>,
			sortable: true,
		},
		{
			name: <div>{<StyledP>Email</StyledP>}</div>,
			selector: "email",
			sortable: true,
		},
		{
			name: <div>{<StyledP>Acciones</StyledP>}</div>,
			selector: "acciones",
			sortable: true,
			cell: (row) => (
				<div>
					<span>
						<FontAwesomeIcon
							icon={faUserClock}
							onClick={() => handleClick(row.nombre, "active")}
						/>
					</span>
				</div>
			),
		},
	];

	return (
		<Body
			title="Usuarios registrados"
			color_logo={Colors.extraDarkBlue}
			color_header={Colors.extraDarkBlue}
			color_letra={Colors.white}
		>
			<Container row>
				<StyledWrapper>
					<DataTable columns={columns} data={usuarios} />
				</StyledWrapper>
			</Container>
			<UserModal
				nombreUsuario={currentName}
				currentUserState={currentUserState}
				active={active}
				hideModal={() => setActive(false)}
			/>
		</Body>
	);
}
export default ListaUsuariosAdmins;
