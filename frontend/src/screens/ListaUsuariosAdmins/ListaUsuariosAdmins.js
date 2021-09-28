import React, {useState, useMemo} from "react";
import {useTable} from "react-table";
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
import DataTable from "react-data-table-component";
import usuarios from "assets/usuarios.json";
import {people1b, people4b, people13b} from "assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserModal from "components/composed/UserModal/UserModal.js";
import DeleteModal from "components/composed/DeleteModal/DeleteModal.js";
import EditProfile from "components/composed/EditProfileModal/EditProfile.js";

// Styles
import {StyledWrapper, StyledImage, StyledDiv} from "./ListaUsuariosAdmins.style";

function ListaUsuariosAdmins() {
	const images = [people1b, people4b, people13b];
	const [active, setActive] = useState(false);

	const [dataUsers, setDataUsers] = useState(usuarios);
	const data = useMemo(() => [...dataUsers], [dataUsers]);
	console.log("data + " + data[0].email);

	//Delete user
	const [eliminar, setEliminar] = useState(false);
	const [currentColum, setCurrentColum] = useState("");

	// Current user
	const [currentName, setCurrentName] = useState("");
	const [editar, setEditar] = useState(false);
	const [currentUserState, setCurrentUserState] = useState("pending");

	//Edit Profile
	const [currentEmail, setCurrentEmail] = useState("");

	const handleModalStatus = (name, state) => {
		setCurrentName(name);
		setCurrentUserState(state);
		setActive(true);
	};

	const handleModalDelete = (row) => {
		setCurrentColum(row);
		setEliminar(true);
	};

	const handleModalEdit = (name, email) => {
		setCurrentName(name);
		setCurrentEmail(email);
		setEditar(true);
	};

	const updateDelete = (user) => {
		const newUsers = dataUsers.filter(function (user) {
			return user !== currentColum;
		});

		setDataUsers(newUsers);
	};

	const updateUserData = (newName, newEmail) => {
		setDataUsers(
			dataUsers.map((item) =>
				item.nombre === currentName || item.email === currentEmail
					? {...item, nombre: newName, email: newEmail}
					: item
			)
		);
	};

	const updateUserStatus = (val, nombreUsuario) => {
		setDataUsers(
			dataUsers.map((t) => (t.nombre === nombreUsuario ? {...t, acciones: val} : t))
		);
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
				Cell: (row) => (
					<StyledDiv>
						{<StyledImage src={images[row.id]} alt="foto" width="30px" height="30px" />}
					</StyledDiv>
				),
				//sortable: true,
				//compact: true,
				minWidth: "32px",
				//hide: 600,
			},
			{
				Header: (
					<StyledDiv color={Colors.frenchBlue} padding="0">
						Nombre
					</StyledDiv>
				),
				accessor: "nombre",
				//Cell: (row) => <StyledDiv color={Colors.frenchBlue}>{row.nombre}</StyledDiv>,
				//sortable: true,
				//compact: true,
				minWidth: "40px",
			},
			{
				name: <StyledDiv color={Colors.frenchBlue}>Email</StyledDiv>,
				accessor: "email",
				//Cell: (row) => <StyledDiv color={Colors.extraDarkBlue}>{row.email}</StyledDiv>,
				//sortable: true,
				//compact: true,
				minWidth: "60px",
			},
			{
				Header: <StyledDiv color={Colors.frenchBlue}>Acciones</StyledDiv>,
				accessor: "acciones",
				//sortable: true,
				//compact: true,
				//right: true,
				minWidth: "140px",
				Cell: (row) => (
					<div className="actions-column">
						<button onClick={() => handleModalStatus(row.nombre, row.acciones)}>
							<FontAwesomeIcon
								icon={
									row.acciones === "rejected"
										? faUserAltSlash
										: row.acciones === "aprobado"
										? faUserCheck
										: faUserClock
								}
								color={
									row.acciones === "rejected"
										? Colors.redColor
										: row.acciones === "aprobado"
										? Colors.darkGreen
										: Colors.grey
								}
							></FontAwesomeIcon>
						</button>
						<button onClick={() => handleModalEdit(row.nombre, row.email, row.id)}>
							<FontAwesomeIcon icon={faEye} color={Colors.extraDarkBlue} />
						</button>
						<button onClick={() => handleModalDelete(row)}>
							<FontAwesomeIcon icon={faTrash} color={Colors.redColor} />
						</button>
					</div>
				),
			},
		],
		[images]
	);

	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
		columns,
		data,
	});
	//data: dataUsers
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
					<table {...getTableProps()} style={{border: "solid 1px blue"}}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th
											{...column.getHeaderProps()}
											style={{
												background: "white",
												color: "#0077B3",
												fontWeight: "bold",
											}}
										>
											{column.render("Header")}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{rows.map((row) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell) => {
											return (
												<td
													{...cell.getCellProps()}
													style={{
														padding: "10px",
														/*borderBottom: "solid 1px gray",*/
														background: "white",
													}}
												>
													{cell.render("Cell")}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
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
				hideModal={() => setEliminar(false)}
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
}
export default ListaUsuariosAdmins;

/*import React, {useState} from "react";
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
import DataTable from "react-data-table-component";
import usuarios from "assets/usuarios.json";
import {people1b, people4b, people13b} from "assets/images";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UserModal from "components/composed/UserModal/UserModal.js";
import DeleteModal from "components/composed/DeleteModal/DeleteModal.js";
import EditProfile from "components/composed/EditProfileModal/EditProfile.js";

// Styles
import {StyledWrapper, StyledImage, StyledDiv} from "./ListaUsuariosAdmins.style";

function ListaUsuariosAdmins() {
	const images = [people1b, people4b, people13b];
	const [active, setActive] = useState(false);
	const [dataUsers, setDataUsers] = useState(usuarios);

	//Delete user
	const [eliminar, setEliminar] = useState(false);
	const [currentColum, setCurrentColum] = useState("");

	// Current user
	const [currentName, setCurrentName] = useState("");
	const [editar, setEditar] = useState(false);
	const [currentUserState, setCurrentUserState] = useState("pending");

	//Edit Profile
	const [currentEmail, setCurrentEmail] = useState("");

	const handleModalStatus = (name, state) => {
		setCurrentName(name);
		setCurrentUserState(state);
		setActive(true);
	};

	const handleModalDelete = (row) => {
		setCurrentColum(row);
		setEliminar(true);
	};

	const handleModalEdit = (name, email) => {
		setCurrentName(name);
		setCurrentEmail(email);
		setEditar(true);
	};

	const updateDelete = (user) => {
		const newUsers = dataUsers.filter(function (user) {
			return user !== currentColum;
		});

		setDataUsers(newUsers);
	};

	const updateUserData = (newName, newEmail) => {
		setDataUsers(
			dataUsers.map((item) =>
				item.nombre === currentName || item.email === currentEmail
					? {...item, nombre: newName, email: newEmail}
					: item
			)
		);
	};

	const updateUserStatus = (val, nombreUsuario) => {
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
					{<StyledImage src={images[row.id]} alt="foto" width="30px" height="30px" />}
				</StyledDiv>
			),
			sortable: true,
			compact: true,
			minWidth: "32px",
			hide: 600,
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
			minWidth: "40px",
		},
		{
			name: <StyledDiv color={Colors.frenchBlue}>Email</StyledDiv>,
			selector: "email",
			cell: (row) => <StyledDiv color={Colors.extraDarkBlue}>{row.email}</StyledDiv>,
			sortable: true,
			compact: true,
			minWidth: "60px",
		},
		{
			name: <StyledDiv color={Colors.frenchBlue}>Acciones</StyledDiv>,
			selector: "acciones",
			sortable: true,
			compact: true,
			right: true,
			minWidth: "140px",
			cell: (row) => (
				<div className="actions-column">
					<button onClick={() => handleModalStatus(row.nombre, row.acciones)}>
						<FontAwesomeIcon
							icon={
								row.acciones === "rejected"
									? faUserAltSlash
									: row.acciones === "aprobado"
									? faUserCheck
									: faUserClock
							}
							color={
								row.acciones === "rejected"
									? Colors.redColor
									: row.acciones === "aprobado"
									? Colors.darkGreen
									: Colors.grey
							}
						></FontAwesomeIcon>
					</button>
					<button onClick={() => handleModalEdit(row.nombre, row.email, row.id)}>
						<FontAwesomeIcon icon={faEye} color={Colors.extraDarkBlue} />
					</button>
					<button onClick={() => handleModalDelete(row)}>
						<FontAwesomeIcon icon={faTrash} color={Colors.redColor} />
					</button>
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
			paddingTitle="0px"
			paddingTitle2="73px"
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
				updateUserStatus={updateUserStatus}
			/>
			<DeleteModal
				columnSelect={currentColum}
				currentUser={eliminar}
				active={eliminar}
				hideModal={() => setEliminar(false)}
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
}
export default ListaUsuariosAdmins;
*/
