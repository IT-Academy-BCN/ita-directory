import React, {Fragment} from "react";

import {
	Card,
	CardHeader,
	CardTitle,
	CardInput,
	CardSelectorWrapper,
	CardCheckbox,
} from "./AdListFilter.style";

function AdFilters() {
	return (
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle>Filtros</CardTitle>
					<hr style={{width: "100%"}} /> Precio
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
				</CardHeader>
			</Card>
		</Fragment>
	);
}

export default AdFilters;
