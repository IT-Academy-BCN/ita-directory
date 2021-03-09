import React, {useState, useEffect} from "react";
import InputNumber from "components/units/InputNumber/InputNumber";

function FilterList() {
	const [priceMin, setPriceMin] = useState("");
	const [priceMax, setPriceMax] = useState("");
	const [sizeMin, setSizeMin] = useState("");
	const [sizeMax, setSizeMax] = useState("");

	useEffect(() => {
		console.log("pisos", {priceMin, priceMax});
	}, [priceMin, priceMax, sizeMin, sizeMax]);

	return (
		<div>
			<h3>Filtros</h3>
			<div>
				<InputNumber
					type="number"
					value={priceMin}
					onChange={(e) => setPriceMin(e.target.value)}
					placeholder="Mín"
				/>
				<InputNumber
					type="number"
					value={priceMax}
					onChange={(e) => setPriceMax(e.target.value)}
					placeholder="Max"
				/>
			</div>
			<div>
				<h3>Tamaño</h3>
				<InputNumber
					type="number"
					value={sizeMin}
					onChange={(e) => setSizeMin(e.target.value)}
					placeholder="Mín"
				/>
				<InputNumber
					type="number"
					value={sizeMax}
					onChange={(e) => setSizeMax(e.target.value)}
					placeholder="Max"
				/>
			</div>
			<div>
				<input type="checkbox" id="check" value="0" name="gastos" />
				<label>Gastos incluidos</label>
			</div>
		</div>
	);
}

export default FilterList;
