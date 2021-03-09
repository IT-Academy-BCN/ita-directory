import React from "react";
import InputNumber from "components/units/InputNumber/InputNumber";

function FilterList(props) {
	const handleChange = (e) => {
		const {name, type, checked, value} = e.target;
		props.onChange(name, type, checked, value);
	};

	return (
		<div>
			<h3>Filtros</h3>
			<div>
				<h3>Precio</h3>
				<InputNumber
					name="priceMin"
					type="number"
					value={props.filters.priceMin}
					onChange={handleChange}
					placeholder="Mín"
				/>
				<InputNumber
					name="priceMax"
					type="number"
					value={props.filters.priceMax}
					onChange={handleChange}
					placeholder="Max"
				/>
			</div>
			<div>
				<h3>Tamaño</h3>
				<InputNumber
					name="sizeMin"
					type="number"
					value={props.filters.sizeMin}
					onChange={handleChange}
					placeholder="Mín"
				/>
				<InputNumber
					name="sizeMax"
					type="number"
					value={props.filters.sizeMax}
					onChange={handleChange}
					placeholder="Max"
				/>
			</div>
			<div>
				<input
					type="checkbox"
					id="check"
					checked={props.filters.billsIncluded}
					onChange={handleChange}
					name="billsIncluded"
				/>
				<label>Gastos incluidos</label>
			</div>
		</div>
	);
}

export default FilterList;
