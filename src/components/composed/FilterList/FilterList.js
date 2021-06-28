import React, {useState} from "react";
import InputNumber from "components/units/InputNumber/InputNumber";
import Button from "components/units/Button/Button";
import {StyledContainer} from "./FilterList.styles";

function FilterList(props) {
	const noFilters = {
		priceMin: "",
		priceMax: "",
		sizeMin: "",
		sizeMax: "",
		billsIncluded: false,
	};
	const [filters, setFilters] = useState(noFilters);

	const handleChange = (e) => {
		const {name, type, checked, value} = e.target;
		setFilters({
			...filters,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(filters);
	};
	const handleReset = (e) => {
		e.preventDefault();
		document.getElementById("filterList").reset();
		setFilters(noFilters);
		props.onSubmit(noFilters);
	};

	return (
		<StyledContainer className="styleFilter">
			<form onSubmit={handleSubmit} id="filterList">
				<h3>Filtros</h3>
				<label>Precio</label>
				<div className="styledContainerInputs">
					<InputNumber
						name="priceMin"
						type="number"
						value={filters.priceMin}
						onChange={handleChange}
						placeholder="Mín"
						className="styleFilterList styleFilter"
					/>
					<InputNumber
						name="priceMax"
						type="number"
						value={filters.priceMax}
						onChange={handleChange}
						placeholder="Máx"
						className="styleFilterList"
					/>
				</div>
				<label>Tamaño</label>
				<div className="styledContainerInputs">
					<InputNumber
						name="sizeMin"
						type="number"
						value={filters.sizeMin}
						onChange={handleChange}
						placeholder="Mín"
						className="styleFilterList styleFilter"
					/>
					<InputNumber
						name="sizeMax"
						type="number"
						value={filters.sizeMax}
						onChange={handleChange}
						placeholder="Máx"
						className="styleFilterList"
					/>
				</div>
				<div className="styledContainerCheckbox">
					<input
						className="styledCheckbox"
						type="checkbox"
						id="check"
						checked={filters.billsIncluded}
						onChange={handleChange}
						name="billsIncluded"
					/>
					<label>Gastos incluidos</label>
				</div>
				<Button
					buttonStyles={{width: "100%", height: "2.125rem", margin: "2rem 0 0.5rem 0"}}
					text="Aplicar filtros"
					type="normal"
					className="blueGradient"
				/>
				<Button
					text="Reset"
					buttonStyles={{width: "100%", height: "2.125rem", margin: "1rem 0 0.5rem 0"}}
					type="normal"
					className="blueGradient"
					onClick={handleReset}
				/>
			</form>
		</StyledContainer>
	);
}

export default FilterList;
