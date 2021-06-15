import React, {Fragment} from "react";

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

function AdFilters() {
	const filtrar = () => {
		console.log("dff");
	};
	return (
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle>Filtros</CardTitle>
					<FilterHr style={{width: "100%"}} /> Precio
					<CardSelectorWrapper>
						<CardInput placeholder="Min"></CardInput>
						<CardInput placeholder="Max"></CardInput>
					</CardSelectorWrapper>
					Tamaño
					<CardSelectorWrapper>
						<CardInput placeholder="Min"></CardInput>
						<CardInput placeholder="Max"></CardInput>
					</CardSelectorWrapper>
					<CardSelectorWrapper>
						<CardCheckbox type="checkbox" />
						Gastos Incluidos
					</CardSelectorWrapper>
					<Button onClick={() => filtrar()}>Filtrar</Button>
				</CardHeader>
			</Card>
		</Fragment>
	);
}

export default AdFilters;
