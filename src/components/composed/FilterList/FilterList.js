import React, {useState} from "react";
import InputNumber from "components/units/InputNumber/InputNumber";
import Button from "components/units/Button/Button";
import {
	StyledContainer,
	StyledLabel,
	StyledCheckbox,
	StyledFiltros,
	StyledContainerInputs,
	StyledContainerCheckbox,
} from "./FilterList.styles";

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

	return (
		<StyledContainer>
			<form onSubmit={handleSubmit}>
				<StyledFiltros>Filtros</StyledFiltros>
				<StyledLabel>Precio</StyledLabel>
				<StyledContainerInputs>
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
				</StyledContainerInputs>
				<StyledLabel>Tamaño</StyledLabel>
				<StyledContainerInputs>
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
				</StyledContainerInputs>
				<StyledContainerCheckbox>
					<StyledCheckbox
						type="checkbox"
						id="check"
						checked={filters.billsIncluded}
						onChange={handleChange}
						name="billsIncluded"
					/>
					<StyledLabel>Gastos incluidos</StyledLabel>
				</StyledContainerCheckbox>
				<Button
					buttonStyles={{width: "7.25rem", height: "2.125rem", marginTop: "2rem"}}
					text="Enviar"
					type="normal"
					className="blueGradient"
				/>
			</form>
		</StyledContainer>
	);
}

export default FilterList;
