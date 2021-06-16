import React, {Fragment} from "react";

import {
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	CardInput,
	CardSelectorWrapper,
	CardCheckbox,
	FilterHr,
} from "./AdListFilter.style";

function AdFilters() {
	return (
		<Fragment>
			<Card>
				<CardHeader>
					<CardTitle>Filtros</CardTitle>
					<FilterHr style={{width: "100%"}} />
				</CardHeader>
				<CardBody>
					<div>
						Precio
						<CardSelectorWrapper>
							<CardInput placeholder="Min"></CardInput>
							<CardInput placeholder="Max"></CardInput>
						</CardSelectorWrapper>
					</div>
					<div>
						Tamaño
						<CardSelectorWrapper>
							<CardInput placeholder="Min"></CardInput>
							<CardInput placeholder="Max"></CardInput>
						</CardSelectorWrapper>
					</div>
				</CardBody>
				<CardSelectorWrapper style={{width: "100%"}}>
					<CardCheckbox type="checkbox" />
					Gastos Incluidos
				</CardSelectorWrapper>
			</Card>
		</Fragment>
	);
}

export default AdFilters;
