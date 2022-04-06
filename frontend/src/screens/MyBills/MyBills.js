/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState, useMemo} from "react";
import Body from "components/layout/Body/Body";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Colors from "theme/Colors";
import bills from "./billsData.json";
import {Link} from "react-router-dom";
import {MyTableStyle, RowTableStyle, HeaderTableStyle} from "./MyBills.styles";
import DownloadPDF from "./DocumentComponent";
import modelBill from "./modelBillData.json";

// -----------------------------------
import {useTable} from "react-table";
// -----------------------------------

const MyBills = () => {
	//Get the fake JSON data
	const [billsData] = useState(bills);
	console.log(billsData);
	const data = useMemo(() => [...billsData], [billsData]);

	// const billExist = () => {
	// 	if(!billsData[0].id && billsData[1].id)
	// }

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const columns = useMemo(() => [
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} style={{textAlign: "left"}}>
					N.Ref.
				</HeaderTableStyle>
			),
			accessor: "id",
			Cell: ({row}) => (
				<RowTableStyle color={Colors.lightGrey} style={{textAlign: "left"}}>
					{row.values.id}
				</RowTableStyle>
			),
			left: true,
		},
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} style={{textAlign: "left"}}>
					Fecha
				</HeaderTableStyle>
			),
			accessor: "fecha",
			Cell: ({row}) => (
				<RowTableStyle color={Colors.grey} style={{textAlign: "left"}}>
					{row.values.fecha}
				</RowTableStyle>
			),
		},
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} padding="0">
					Subtotal
				</HeaderTableStyle>
			),
			accessor: "costeSinIVA",
			Cell: ({row}) => (
				<RowTableStyle color={Colors.grey}>
					{row.values.costeSinIVA}
					<span>€</span>
				</RowTableStyle>
			),
		},
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} padding="0">
					IVA
				</HeaderTableStyle>
			),
			accessor: "IVA",
			Cell: ({row}) => (
				<RowTableStyle color={Colors.grey}>
					{" "}
					{row.values.IVA} <span>%</span>
				</RowTableStyle>
			),
		},
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} padding="0">
					Desc.
				</HeaderTableStyle>
			),
			accessor: "descuento",
			Cell: ({row}) => (
				<RowTableStyle color={Colors.grey}>
					{" "}
					{row.values.descuento} {row.values.descuento ? <span>%</span> : <span>-</span>}
				</RowTableStyle>
			),
		},
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} paddingL="0">
					Total
				</HeaderTableStyle>
			),
			accessor: "total",
			Cell: ({row}) => (
				<RowTableStyle color={Colors.grey}>
					{row.values.descuento
						? row.values.costeSinIVA -
						  (row.values.costeSinIVA * row.values.descuento) / 100 +
						  (row.values.costeSinIVA * row.values.IVA) / 100
						: row.values.costeSinIVA + (row.values.costeSinIVA * row.values.IVA) / 100}
					<span>€</span>
				</RowTableStyle>
			),
		},
		{
			Header: (
				<HeaderTableStyle color={Colors.frenchBlue} style={{textAlign: "right"}}>
					Acciones
				</HeaderTableStyle>
			),
			accessor: "acciones",
			Cell: ({row}) => (
				<RowTableStyle style={{textAlign: "center"}}>
					<Link to={`/my-bills/${row.values.id}`} title="Ver factura">
						<FontAwesomeIcon icon={faEye} color={Colors.grey} />
					</Link>

					{modelBill.map(
						(invoice) =>
							invoice.id === row.values.id && (
								<DownloadPDF key={invoice.id} data={[invoice]} type={"icon"} />
							)
					)}
				</RowTableStyle>
			),
		},
	]);

	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
		columns,
		data,
	});
	//#e6f2f2

	return (
		<Body
			title="Mis facturas"
			logoColor={Colors.darkRed}
			headerColor={Colors.lightblue} // TODO: This should be lightBlue but have no sense
			fontColor={Colors.grey}
			justifyTitle="flex-start"
			isLoggedIn="true"
		>
			<MyTableStyle className="MyTableStyle">
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
								<tr
									{...row.getRowProps()}
									style={{borderTop: `solid 1px ${Colors.grey}`}}
								>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</MyTableStyle>
		</Body>
	);
};

export default MyBills;
