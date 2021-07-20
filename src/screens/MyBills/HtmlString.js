import {useState} from "react";
import DownLoadButton from "components/units/Button/Button";
import DataTable from "react-data-table-component";
import {useParams} from "react-router-dom";
import modelBill from "./modelBillData.json";

const HtmlString = () => {
	const {id} = useParams();
	console.log("params", id);
	const [data] = useState(modelBill);

	const selectedBill = data.filter((selected) => selected.id === id);

	console.log("selected", selectedBill);

	console.log("data", data);
	//Build columns for datatable

	const columns = [
		{
			name: <div>#</div>,
			selector: "itemID",
			cell: (row) => <div>{row.itemID}</div>,
			compact: true,
			width: "100px",
			left: true,
			hide: 600,
		},
		{
			name: <div>ITEM</div>,
			selector: "itemTitle",
			cell: (row) => <div>{row.itemTitle}</div>,
			compact: true,
			width: "100px",
			left: true,
		},
		{
			name: <div>PRICE</div>,
			selector: "itemPrice",
			cell: (row) => (
				<div>
					<span>€ </span>
					{row.itemsPrice}
				</div>
			),
			compact: true,
			width: "100px",
			center: true,
		},
		{
			name: <div>QUANTITY</div>,
			selector: "itemQuant",
			cell: (row) => <div>{row.itemsQuant}</div>,
			compact: true,
			width: "100px",
			center: true,
		},
		{
			name: <div>AMOUNT</div>,
			selector: "amount",
			cell: (row) => (
				<div>
					<span>€ </span>
					{row.itemsPrice * row.itemsQuant}
				</div>
			),
			sortable: true,
			compact: true,
			width: "100px",
			center: true,
		},
	];

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				background: "#EEEEEE",
			}}
		>
			<h2 className="logo" style={{color: "darkred"}}>
				LOGO EMPRESA
			</h2>
			<DownLoadButton
				text="Descargar"
				className="blueGradient"
				textStyles={{marginLeft: 10}}
				type="file"
			/>
			<div>
				<header>
					<h2>{}</h2>
					<h2>{}</h2>
				</header>
				<section>
					<div>
						<p>Invoice to:</p>
						<p>{}</p>
						<p>{}</p>
					</div>
					<div>
						<p>Invoice from:</p>
						<p>{}</p>
						<p>{}</p>
					</div>
				</section>
				<section>
					<div>
						<p>Address:</p>
						<p>{}</p>
					</div>
					<div>
						<p>Address:</p>
						<p>{}</p>
					</div>
				</section>
				<div style={{alignContent: "center", padding: "4rem"}}>
					<DataTable columns={columns} noHeader={true} data={data} />
				</div>
			</div>
		</div>
	);
};

export default HtmlString;
