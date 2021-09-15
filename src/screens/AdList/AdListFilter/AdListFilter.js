import React, {useState} from "react";

import {
	// CardOpenModal,
	Card,
	CardHeader,
	CardValue,
	// CardBody,
	CardTitle,
	CardInput,
	CardSelectorWrapper,
	CardCheckbox,
	FilterHr,
	Button,
} from "./AdListFilter.style";

function AdFilters({filtrar, maxPriceValue, minPriceValue, maxM2, minM2}) {
	const [maxPrice, setMaxPrice] = useState(99999999999);
	const [maxSize, setMaxSize] = useState(9999999999);
	const [minPrice, setMinPrice] = useState(0);
	const [minSize, setMinSize] = useState(0);
	const [gastosInc, setGastosInc] = useState(false);

	console.log(maxPriceValue, minPriceValue, maxM2, minM2);

	function ClearFilter() {
		setMaxPrice(99999999999);
		setMaxSize(9999999999);
		setMinPrice(0);
		setMinSize(0);
		setGastosInc(false);
		filtrar({gastosInc, maxPrice, minPrice, maxSize, minSize});
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Filtros</CardTitle>
				<Button onClick={() => ClearFilter()}>Limpiar busqueda</Button>
				<CardValue>
					Precio mín y máx: {minPriceValue} - {maxPriceValue}
				</CardValue>
				<CardValue>
					Tamaño mín y máx: {minM2} - {maxM2}
				</CardValue>
				<FilterHr style={{width: "100%"}} /> Precio
				<CardSelectorWrapper>
					<CardInput
						className="Minprice"
						placeholder="Min"
						onChange={(e) => setMinPrice(e.target.value)}
					></CardInput>

					<CardInput
						placeholder="Max"
						onChange={(e) => setMaxPrice(e.target.value)}
					></CardInput>
				</CardSelectorWrapper>
				<CardSelectorWrapper>
					<CardInput
						placeholder="Min"
						onChange={(e) => setMinSize(e.target.value)}
					></CardInput>
					<CardInput
						placeholder="Max"
						onChange={(e) => setMaxSize(e.target.value)}
					></CardInput>
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
