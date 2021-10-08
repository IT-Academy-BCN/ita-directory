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
import {StyledTableWrapper, StyledImage, StyledCell} from "./ListaUsuariosAdmins.style";

const ListaUsuariosAdmins = () => {
	const [images] = useState([people1b, people4b, people13b]);
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
		[]
		//[currentName, currentUserState, active]
	);

	const handleModalDelete = useCallback(
		(row) => {
			setCurrentColum((prev) => row);
			setEliminar((prev) => true);
		},
		[]
		//[currentColum, eliminar]
	);

	const handleModalEdit = useCallback(
		(name, email) => {
			setCurrentName((prev) => name);
			setCurrentEmail((prev) => email);
			setEditar((prev) => true);
		},
		[]
		// [currentName, currentEmail, editar]
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
		[dataUsers, currentColum]
		//[dataUsers, currentColum, eliminar]
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
		[dataUsers, currentName, currentEmail]
		//[dataUsers, currentName, currentEmail, eliminar, currentColum]
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
		return {borderTop: `0.9px solid ${Colors.bahamaBlue}`};
	};

	const columns = useMemo(
		() => [
			{
				Header: (
					<StyledCell color={Colors.bahamaBlue} paddingL="0px">
						Foto
					</StyledCell>
				),
				accessor: "foto",

				Cell: ({row}) => (
					<StyledCell>
						{<StyledImage src={images[row.id]} alt="foto" width="50px" height="50px" />}
					</StyledCell>
				),
				minWidth: "32px",
			},
			{
				Header: (
					<StyledCell color={Colors.bahamaBlue} padding="0">
						Nombre
					</StyledCell>
				),
				accessor: "nombre",
				Cell: ({row}) => (
					<StyledCell color={Colors.bahamaBlue}>{row.values.nombre}</StyledCell>
				),
				minWidth: "60px",
			},
			{
				Header: <StyledCell color={Colors.bahamaBlue}>Email</StyledCell>,
				accessor: "email",
				Cell: ({row}) => (
					<StyledCell color={Colors.prussianBlue}>{row.values.email}</StyledCell>
				),
				minWidth: "60px",
			},
			{
				Header: (
					<StyledCell color={Colors.bahamaBlue} justify={"flex-end"}>
						Acciones
					</StyledCell>
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
							<FontAwesomeIcon icon={faEye} color={Colors.prussianBlue} />
						</button>
						<button onClick={() => handleModalDelete(row.values)}>
							<FontAwesomeIcon icon={faTrash} color={Colors.redColor} />
						</button>
					</div>
				),
			},
		],
		[handleModalDelete, handleModalEdit, handleModalStatus, images]
	);

	return (
		<Body
			title="Usuarios registrados"
			logoColor={Colors.bahamaBlue}
			headerColor={Colors.bahamaBlue}
			fontColor={Colors.white}
			justifyTitle="flex-start"
			paddingTitle="0px"
			paddingTitle2="73px"
			isLoggedIn="true"
		>
			<Container row>
				<StyledTableWrapper>
					<ReactTable columns={columns} data={data} customRowStyle={customRowStyle} />
				</StyledTableWrapper>
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
