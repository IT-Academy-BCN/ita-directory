import Body from "components/layout/Body/Body";
import {Container} from "theme/GlobalStyles.js";
import {StyledWrapper, StyledImage, StyledP, StyledSpan} from "./ListaUsuariosAdmins.style";
import Colors from "theme/Colors";
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

	console.log("currentUserState parent", currentUserState);
	console.log("dataUsers", dataUsers[0]);

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
						<span>
							<FontAwesomeIcon
								icon={faTrash}
								style={{color: "red"}}
								onClick={() => handleDelete(row)}
							/>
						</span>
						<span>
							<FontAwesomeIcon
								icon={faEye}
								style={{color: "blue"}}
								onClick={() => handleVisual(row.nombre, row.email)}
							/>
						</span>
					</StyledSpan>
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
					<DataTable columns={columns} data={dataUsers} />
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
