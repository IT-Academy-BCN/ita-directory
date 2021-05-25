import Body from "components/layout/Body/Body";
import {Container} from "theme/GlobalStyles.js";
import Colors from "theme/Colors";
import {StyledWrapper, StyledImage, StyledSpan, StyledDiv} from "./ListaUsuariosAdmins.style";
import DataTable from "react-data-table-component";
import usuarios from "assets/usuarios.json";
import {people1b, people4b, people13b} from "assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserModal from "components/composed/UserModal/UserModal.js";
import DeleteModal from "components/composed/DeleteModal/DeleteModal.js";
import EditProfile from "components/composed/EditProfileModal/EditProfile.js";

import React, {useState} from "react";
import {
	faUserClock,
	faUserCheck,
	faUserAltSlash,
	faTrash,
	faEye,
} from "@fortawesome/free-solid-svg-icons";

function ListaUsuariosAdmins() {
	const images = [people1b, people4b, people13b];
	const [active, setActive] = useState(false);
	const [dataUsers, setDataUsers] = useState(usuarios);

	//Delete user
	const [eliminar, setEliminar] = useState(false);
	const [currentColum, setCurrentColum] = useState("");

	// Current user
	const [currentName, setCurrentName] = useState("");
	const [currentUserState, setCurrentUserState] = useState("pending");

	//Edit Profile
	const [currentNombre, setCurrentNombre] = useState("");
	const [currentEmail, setCurrentEmail] = useState("");
	const [cerrar, setCerrar] = useState(false);

	const handleClick = (name, state) => {
		setCurrentName(name);
		setCurrentUserState(state);
		setActive(true);
	};

	const handleDelete = (row) => {
		setCurrentColum(row);
		setEliminar(true);
	};

	const handleVisual = (nombre, email) => {
		setCurrentNombre(nombre);
		setCurrentEmail(email);
		setCerrar(true);
	};

	const updateDelete = (user) => {
		const newUsers = dataUsers.filter(function (user) {
			return user !== currentColum;
		});

		setDataUsers(newUsers);
	};
	const updateUser = (val, nombreUsuario) => {
		console.log(val, nombreUsuario);
		setDataUsers(
			dataUsers.map((t) => (t.nombre === nombreUsuario ? {...t, acciones: val} : t))
		);
	};

	const columns = [
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="0px">
					Foto
				</StyledDiv>
			),
			selector: "foto",
			cell: (row) => (
				<StyledDiv>
					{<StyledImage src={images[row.id]} alt="foto" width="50px" height="50px" />}
				</StyledDiv>
			),
			sortable: true,
			compact: false,
			minWidth: "50px",
		},
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} padding="0">
					Nombre
				</StyledDiv>
			),
			selector: "nombre",
			cell: (row) => <StyledDiv color={Colors.frenchBlue}>{row.nombre}</StyledDiv>,
			sortable: true,
			compact: true,
			minWidth: "50px",
		},
		{
			name: <StyledDiv color={Colors.frenchBlue}>Email</StyledDiv>,
			selector: "email",
			cell: (row) => <StyledDiv color={Colors.extraDarkBlue}>{row.email}</StyledDiv>,
			sortable: true,
			compact: true,
			minWidth: "70px",
		},
		{
			name: <StyledDiv color={Colors.frenchBlue}>Acciones</StyledDiv>,
			selector: "acciones",
			sortable: true,
			compact: false,
			right: true,
			minWidth: "70px",
			cell: (row) => (
				<StyledDiv>
					<StyledSpan colorIcono={row.acciones}>
						<FontAwesomeIcon
							icon={
								row.acciones === "rejected"
									? faUserAltSlash
									: row.acciones === "aprobado"
									? faUserCheck
									: faUserClock
							}
							onClick={() => handleClick(row.nombre, row.acciones)}
						/>
						<StyledSpan colorIcono={Colors.extraDarkBlue} paddingL="12px">
							<FontAwesomeIcon
								icon={faEye}
								onClick={() => handleVisual(row.nombre, row.email)}
							/>
						</StyledSpan>
						<StyledSpan colorIcono={Colors.redColor} paddingL="12px">
							<FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(row)} />
						</StyledSpan>
					</StyledSpan>
				</StyledDiv>
			),
		},
	];

	return (
		<Body
			title="Usuarios registrados"
			color_logo={Colors.extraDarkBlue}
			color_header={Colors.extraDarkBlue}
			color_letra={Colors.white}
			justifyTitle="flex-start"
			paddingTitle="0px"
			paddingTitle2="40px"
			isLoggedIn="true"
		>
			<Container row>
				<StyledWrapper>
					<DataTable columns={columns} data={dataUsers} noHeader={true} />
				</StyledWrapper>
			</Container>
			<UserModal
				nombreUsuario={currentName}
				currentUserState={currentUserState}
				active={active}
				hideModal={() => setActive(false)}
				updateUser={updateUser}
			/>

			<DeleteModal
				columnSelect={currentColum}
				currentUser={eliminar}
				active={eliminar}
				hideModal={() => setEliminar(false)}
				updateDelete={updateDelete}
			/>
			<EditProfile
				currentNombre={currentNombre}
				currentEmail={currentEmail}
				currentUser={eliminar}
				active={cerrar}
				hideModal={() => setCerrar(false)}
				// updateCerrar={updateCerrar}
			/>
		</Body>
	);
}
export default ListaUsuariosAdmins;
