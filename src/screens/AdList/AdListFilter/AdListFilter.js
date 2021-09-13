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
	const [maxPrice, setMaxPrice] = useState(99999999999);
	const [maxSize, setMaxSize] = useState(99999999999);
	const [minPrice, setMinPrice] = useState(0);
	const [minSize, setMinSize] = useState(0);
	const [gastosInc, setGastosInc] = useState(false);

	function ClearFilter() {
		setMaxPrice(99999999999);
		setMaxSize(9999999999);
		setMinPrice("");
		setMinSize(0);
		setGastosInc(false);
		filtrar(undefined);
		console.log(maxSize);
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
						className="min-price"
						placeholder="Min"
						value={minPrice}
						onChange={(e) => setMinPrice(e.target.value)}
					/>
					<CardInput placeholder="Max" onChange={(e) => setMaxPrice(e.target.value)} />
				</CardSelectorWrapper>
				Tamaño
				<CardSelectorWrapper>
					<CardInput placeholder="Min" onChange={(e) => setMinSize(e.target.value)} />
					<CardInput placeholder="Max" onChange={(e) => setMaxSize(e.target.value)} />
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
