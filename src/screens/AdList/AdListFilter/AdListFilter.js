import React, {useState} from "react";

import {
	Card,
	CardHeader,
	// CardBody,
	CardTitle,
	CardInput,
	CardSelectorWrapper,
	CardCheckbox,
	FilterHr,
	Button,
} from "./AdListFilter.style";

function AdFilters({filtrar}) {
	const [maxPrice, setMaxPrice] = useState("999999999");
	const [maxSize, setMaxSize] = useState("999999999");
	const [minPrice, setMinPrice] = useState("0");
	const [minSize, setMinSize] = useState("0");
	const [gastosInc, setGastosInc] = useState(false);

	function ClearFilter() {
		setMaxPrice("999999999");
		setMaxSize("999999999");
		setMinPrice("0");
		setMinSize("0");
		setGastosInc(false);
		filtrar(undefined);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Filtros</CardTitle>
				<Button onClick={() => ClearFilter()}>Limpiar busqueda</Button>
				<FilterHr style={{width: "100%"}} /> Precio
				<CardSelectorWrapper>
					<CardInput
						type="number"
						placeholder="Mín"
						value={minPrice}
						onChange={(e) => setMinPrice(e.target.value)}
					/>
					<CardInput
						type="number"
						placeholder="Máx"
						value={maxPrice}
						onChange={(e) => setMaxPrice(e.target.value)}
					/>
				</CardSelectorWrapper>
				Tamaño
				<CardSelectorWrapper>
					<CardInput
						type="number"
						placeholder="Mín"
						value={minSize}
						onChange={(e) => setMinSize(e.target.value)}
					/>
					<CardInput
						type="number"
						placeholder="Máx"
						value={maxSize}
						onChange={(e) => setMaxSize(e.target.value)}
					/>
				</CardSelectorWrapper>
				<CardSelectorWrapper>
					<CardCheckbox
						type="checkbox"
						defaultChecked={gastosInc}
						onClick={() => (gastosInc ? setGastosInc(false) : setGastosInc(true))}
					/>
					Gastos Incluidos
				</CardSelectorWrapper>
				<Button onClick={() => filtrar({gastosInc, maxPrice, minPrice, maxSize, minSize})}>
					Filtrar
				</Button>
			</CardHeader>
		</Card>
	);
}

export default AdFilters;
