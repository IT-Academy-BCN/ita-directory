import PostData from "./lista.json";
import DataTable from "react-data-table-component";
import Body from "components/layout/Body/Body";

function AdminTable() {
	const columnas = [
		{
			name: "Foto",
			selector: "foto",
			sortable: "true",
		},

		{
			name: "Nombre",
			selector: "nombre",
			sortable: "true",
		},

		{
			name: "E-mail",
			selector: "email",
			sortable: "true",
		},
	];

	return (
		<div>
			<Body title="Registro Usuarios">
				<DataTable columns={columnas} data={PostData} />
			</Body>
		</div>
	);
}

export default AdminTable;
