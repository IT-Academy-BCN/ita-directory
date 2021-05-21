import Body from "components/layout/Body/Body";
import {Container} from "theme/GlobalStyles.js";
import {
	StyledWrapper,
	StyledImage,
	StyledP,
	StyledSpan,
	StyledDiv,
} from "./ListaUsuariosAdmins.style";
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
			name: (
				<div>
					{
						<StyledP color={Colors.frenchBlue} paddingL="10px">
							Foto
						</StyledP>
					}
				</div>
			),
			selector: "foto",
			cell: (row) => (
				<StyledDiv>
					{<StyledImage src={images[row.id]} alt="foto" width="60px" height="60px" />}
				</StyledDiv>
			),
			sortable: true,
		},
		{
			name: (
				<div>
					{
						<StyledP color={Colors.frenchBlue} padding="0">
							Nombre
						</StyledP>
					}
				</div>
			),
			selector: "nombre",
			cell: (row) => <div>{<StyledP color={Colors.frenchBlue}>{row.nombre}</StyledP>}</div>,
			sortable: true,
		},
		{
			name: <div>{<StyledP color={Colors.frenchBlue}>Email</StyledP>}</div>,
			selector: "email",
			cell: (row) => <div>{<StyledP color={Colors.extraDarkBlue}>{row.email}</StyledP>}</div>,
			sortable: true,
		},
		{
			name: (
				<div>
					{
						<StyledP color={Colors.frenchBlue} paddingL="210px">
							Acciones
						</StyledP>
					}
				</div>
			),
			selector: "acciones",
			sortable: true,
			cell: (row) => (
				<div>
					<StyledSpan colorIcono={row.acciones} paddingL="210px">
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
			justifyTitle="flex-start"
			paddingTitle="5px"
			paddingTitle2="70px"
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
