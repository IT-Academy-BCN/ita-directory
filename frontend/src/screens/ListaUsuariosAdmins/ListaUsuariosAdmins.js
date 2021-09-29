import React, {useState, useMemo, useCallback} from "react";
import {
	faUserClock,
	faUserCheck,
	faUserAltSlash,
	faTrash,
	faEye,
} from "@fortawesome/free-solid-svg-icons";
import Body from "components/layout/Body/Body";
import {Container} from "theme/GlobalStyles.js";
import Colors from "theme/Colors";
import ReactTable from "../../components/composed/Table/ReactTable";
import usuarios from "assets/usuarios.json";
import {people1b, people4b, people13b} from "assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserModal from "components/composed/UserModal/UserModal.js";
import DeleteModal from "components/composed/DeleteModal/DeleteModal.js";
import EditProfile from "components/composed/EditProfileModal/EditProfile.js";

// Styles
import {StyledWrapper, StyledImage, StyledDiv} from "./ListaUsuariosAdmins.style";

const ListaUsuariosAdmins = () => {
	const images = [people1b, people4b, people13b];
	const [active, setActive] = useState(false);

	const [dataUsers, setDataUsers] = useState(usuarios);
	const data = useMemo(() => [...dataUsers], [dataUsers]);

	//Delete user
	const [eliminar, setEliminar] = useState(false);
	const [currentColum, setCurrentColum] = useState("");

	// Current user
	const [currentName, setCurrentName] = useState("");
	const [editar, setEditar] = useState(false);
	const [currentUserState, setCurrentUserState] = useState("pending");

	//Edit Profile
	const [currentEmail, setCurrentEmail] = useState("");

	const handleModalStatus = useCallback(
		(name, state) => {
			setCurrentName((prev) => name);
			setCurrentUserState((prev) => state);
			setActive((prev) => true);
		},
		[currentName, currentUserState, active]
	);

	const handleModalDelete = useCallback(
		(row) => {
			setCurrentColum((prev) => row);
			localStorage.setItem("currentColP", JSON.stringify("penguinsRgo"));
			localStorage.setItem("currentCol", JSON.stringify(row));
			setEliminar((prev) => true);
		},
		[currentColum, eliminar]
	);

	const handleModalEdit = useCallback(
		(name, email) => {
			setCurrentName((prev) => name);
			setCurrentEmail((prev) => email);
			setEditar((prev) => true);
		},
		[currentName, currentEmail, editar]
	);

	const updateDelete = useCallback(
		(user) => {
			const newUsers = dataUsers.filter((user) => {
				if (user.email.localeCompare(currentColum.email) !== 0) {
					return true;
				} else {
					return false;
				}
			});
			setDataUsers((prev) => newUsers);
		},
		[dataUsers, currentColum, eliminar]
	);

	const updateUserData = useCallback(
		(newName, newEmail) => {
			setDataUsers(
				dataUsers.map((item) =>
					item.nombre === currentName || item.email === currentEmail
						? {...item, nombre: newName, email: newEmail}
						: item
				)
			);
		},
		[dataUsers, currentName, currentEmail, eliminar, currentColum]
	);

	const updateUserStatus = useCallback(
		(val, nombreUsuario) => {
			setDataUsers(
				dataUsers.map((t) => (t.nombre === nombreUsuario ? {...t, acciones: val} : t))
			);
		},
		[dataUsers]
	);

	const customRowStyle = (row) => {
		return;
	};

	const columns = useMemo(
		() => [
			{
				Header: (
					<StyledDiv color={Colors.frenchBlue} paddingL="0px">
						Foto
					</StyledDiv>
				),
				accessor: "foto",

				Cell: ({row}) => (
					<StyledDiv>
						{<StyledImage src={images[row.id]} alt="foto" width="30px" height="30px" />}
					</StyledDiv>
				),
				minWidth: "32px",
			},
			{
				Header: (
					<StyledDiv color={Colors.frenchBlue} padding="0">
						Nombre
					</StyledDiv>
				),
				accessor: "nombre",
				Cell: ({row}) => (
					<StyledDiv color={Colors.frenchBlue}>{row.values.nombre}</StyledDiv>
				),
				minWidth: "60px",
			},
			{
				Header: <StyledDiv color={Colors.frenchBlue}>Email</StyledDiv>,
				accessor: "email",
				Cell: ({row}) => (
					<StyledDiv color={Colors.extraDarkBlue}>{row.values.email}</StyledDiv>
				),
				minWidth: "60px",
			},
			{
				Header: (
					<StyledDiv color={Colors.frenchBlue} justify={"flex-end"}>
						Acciones
					</StyledDiv>
				),
				accessor: "acciones",
				minWidth: "60px",
				Cell: ({row}) => (
					<div className="actions-column">
						<button
							onClick={() =>
								handleModalStatus(row.values.nombre, row.values.acciones)
							}
						>
							<FontAwesomeIcon
								icon={
									row.values.acciones === "rejected"
										? faUserAltSlash
										: row.values.acciones === "aprobado"
										? faUserCheck
										: faUserClock
								}
								color={
									row.values.acciones === "rejected"
										? Colors.redColor
										: row.values.acciones === "aprobado"
										? Colors.darkGreen
										: Colors.grey
								}
							></FontAwesomeIcon>
						</button>
						<button
							onClick={() =>
								handleModalEdit(row.values.nombre, row.values.email, row.values.id)
							}
						>
							<FontAwesomeIcon icon={faEye} color={Colors.extraDarkBlue} />
						</button>
						<button onClick={() => handleModalDelete(row.values)}>
							<FontAwesomeIcon icon={faTrash} color={Colors.redColor} />
						</button>
					</div>
				),
			},
		],
		[images]
	);

	return (
		<Body
			title="Usuarios registrados"
			color_logo={Colors.extraDarkBlue}
			color_header={Colors.extraDarkBlue}
			color_letra={Colors.white}
			justifyTitle="flex-start"
			paddingTitle="0px"
			paddingTitle2="73px"
			isLoggedIn="true"
		>
			<Container row>
				<StyledWrapper>
					<ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
				</StyledWrapper>
			</Container>
			<UserModal
				nombreUsuario={currentName}
				currentUserState={currentUserState}
				active={active}
				hideModal={() => setActive(false)}
				updateUserStatus={updateUserStatus}
			/>
			<DeleteModal
				columnSelect={currentColum}
				currentUser={eliminar}
				active={eliminar}
				hideModal={() => setEliminar((prev) => false)}
				updateDelete={updateDelete}
			/>
			<EditProfile
				currentNombre={currentName}
				currentEmail={currentEmail}
				active={editar}
				hideModal={() => setEditar(false)}
				updateUserData={updateUserData}
				setCurrentNombre={setCurrentName}
				// updateCerrar={updateCerrar}
			/>
		</Body>
	);
};
export default ListaUsuariosAdmins;
