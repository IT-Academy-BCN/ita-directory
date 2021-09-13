/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from "react";
import Body from "components/layout/Body/Body";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container} from "theme/GlobalStyles.js";
import Colors from "theme/Colors";
import DataTable from "react-data-table-component";
import bills from "./billsData.json";
import {Link} from "react-router-dom";
import {StyledWrapper, StyledDiv} from "./MyBills.styles";
import DownloadPDF from "./DocumentComponent";
import modelBill from "./modelBillData.json";

const MyBills = () => {
	//Get the fake JSON data
	const [billsData] = useState(bills);

	/*const billExist = () => {
		if(!billsData[0].id && billsData[1].id)
	}*/

	//Build the columns table
	const columns = [
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="0px">
					N.
				</StyledDiv>
			),
			selector: "id",
			cell: (row) => <StyledDiv color={Colors.lightGrey}>{row.id}</StyledDiv>,
			sortable: true,
			compact: true,
			width: "100px",
			left: true,
			hide: 600,
		},
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="0px">
					Fecha
				</StyledDiv>
			),
			selector: "fecha",
			cell: (row) => <div color={Colors.grey}>{row.fecha}</div>,
			sortable: true,
			compact: true,
			width: "100px",
			left: true,
		},

		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="6px">
					Coste sin IVA
				</StyledDiv>
			),
			selector: "costeSinIVA",
			cell: (row) => (
				<div color={Colors.grey}>
					{row.costeSinIVA}
					<span>€</span>
				</div>
			),
			sortable: true,
			compact: false,
			width: "150px",
			center: true,
		},
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="6px">
					IVA
				</StyledDiv>
			),
			selector: "IVA",
			cell: (row) => (
				<div color={Colors.grey}>
					{row.IVA}
					<span>%</span>
				</div>
			),
			sortable: true,
			compact: true,
			width: "100px",
			center: true,
		},
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="6px">
					Descuento
				</StyledDiv>
			),
			selector: "descuento",
			cell: (row) => (
				<div color={Colors.grey}>
					{row.descuento}
					{row.descuento ? <span>%</span> : <span>-</span>}
				</div>
			),
			sortable: true,
			compact: true,
			width: "100px",
			center: true,
		},
		{
			name: (
				<StyledDiv color={Colors.frenchBlue} paddingL="6px">
					Total
				</StyledDiv>
			),
			selector: "total",
			cell: (row) => (
				<div color={Colors.grey}>
					{row.descuento
						? row.costeSinIVA -
						  (row.costeSinIVA * row.descuento) / 100 +
						  (row.costeSinIVA * row.IVA) / 100
						: row.costeSinIVA + (row.costeSinIVA * row.IVA) / 100}
					<span>€</span>
				</div>
			),
			sortable: true,
			compact: true,
			width: "100px",
			center: true,
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
					<Link to={`/my-bills/${row.id}`} title="Ver factura">
						<FontAwesomeIcon icon={faEye} color={Colors.grey} />
					</Link>

					{modelBill.map(
						(invoice) =>
							invoice.id === row.id && (
								<DownloadPDF key={invoice.id} data={[invoice]} type={"icon"} />
							)
					)}
				</div>
			),
		},
	];

	return (
		<Body
			title="Mis facturas"
			color_logo={Colors.darkRed}
			color_header={Colors.lightBlue}
			color_letra={Colors.grey}
			justifyTitle="flex-start"
			isLoggedIn="true"
		>
			<Container row>
				<StyledWrapper>
					<DataTable columns={columns} noHeader={true} data={billsData} />
				</StyledWrapper>
			</Container>
		</Body>
	);
};

export default MyBills;
