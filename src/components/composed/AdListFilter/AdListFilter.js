import React, {Fragment, useState} from "react";

import {
	Card,
	CardHeader,
	CardTitle,
	CardInput,
	CardSelectorWrapper,
	CardCheckbox,
	FilterHr,
	Button,
} from "./AdListFilter.style";

function AdFilters({filtrar}) {
	const [maxPrice, setMaxPrice] = useState(99999999999);
	const [maxSize, setMaxSize] = useState(9999999999);
	const [minPrice, setMinPrice] = useState(0);
	const [minSize, setMinSize] = useState(0);
	const [gastosInc, setGastosInc] = useState(false);

	return (
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle>Filtros</CardTitle>
					<FilterHr style={{width: "100%"}} /> Precio
					<CardSelectorWrapper>
						<CardInput
							placeholder="Min"
							onChange={(e) => setMinPrice(e.target.value)}
						></CardInput>

						<CardInput
							placeholder="Max"
							onChange={(e) => setMaxPrice(e.target.value)}
						></CardInput>
					</CardSelectorWrapper>
					Tamaño
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
					<Button
						onClick={() => filtrar({gastosInc, maxPrice, minPrice, maxSize, minSize})}
					>
						Filtrar
					</Button>
				</CardHeader>
			</Card>
		</Fragment>
	);
}

export default AdFilters;
