import React, {useState, useEffect} from "react";
import InputNumber from "components/units/InputNumber/InputNumber";

function FilterList() {
	const noFilters = {
		priceMin: "",
		priceMax: "",
		sizeMin: "",
		sizeMax: "",
		billsIncluded: false,
	};

	/*const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [sizeMin, setSizeMin] = useState("");
    const [sizeMax, setSizeMax] = useState("");*/
	const [filters, setFilters] = useState(noFilters);

	/*useEffect(() => {
        console.log("pisos", {priceMin, priceMax});
    }, [priceMin, priceMax, sizeMin, sizeMax]);*/

	const handleChange = (e) => {
		const {name, value, type, checked} = e.target;
		setFilters({
			...filters,
			[name]: type === "checkbox" ? checked : value,
		});
	};
	useEffect(() => {
		console.log(filters);
	}, [filters]);

	return (
		<div>
			<h3>Filtros</h3>
			<div>
				<InputNumber
					name="priceMin"
					type="number"
					value={filters.priceMin}
					onChange={handleChange}
					placeholder="Mín"
				/>
				<InputNumber
					name="priceMax"
					type="number"
					value={filters.priceMax}
					onChange={handleChange}
					placeholder="Max"
				/>
			</div>
			<div>
				<h3>Tamaño</h3>
				<InputNumber
					name="sizeMin"
					type="number"
					value={filters.sizeMin}
					onChange={handleChange}
					placeholder="Mín"
				/>
				<InputNumber
					name="sizeMax"
					type="number"
					value={filters.sizeMax}
					onChange={handleChange}
					placeholder="Max"
				/>
			</div>
			<div>
				<input
					type="checkbox"
					id="check"
					checked={filters.billsIncluded}
					onChange={handleChange}
					name="billsIncluded"
				/>
				<label>Gastos incluidos</label>
			</div>
		</div>
	);
}

export default FilterList;
