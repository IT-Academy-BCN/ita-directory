import {useTable} from "react-table";

/* Note: 
1. when you don't want to add a row style -> Simply apply in your component 	
const customRowStyle = (row) => {
		return;
	};
2. data must be at row level i.e. [{row1data}, [row2data], [row3data]]
*/
const ReactTable = ({columns, data, customRowStyle}) => {
	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
		columns,
		data,
	});
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render("Header")}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr style={customRowStyle(row)} {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ReactTable;
