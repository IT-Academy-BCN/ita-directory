export const MAP_ACTIONS = {
	LIT_NEIGHBOURHOOD: "LIT_NEIGHBOURHOOD",
	LIT_DISTRICT: "LIT_DISTRICT",
	LIST_MAP_DISTRICT: "LIST_MAP_DISTRICT",
};

export const reducer = (state, action) => {
	switch (action.type) {
		case MAP_ACTIONS.LIT_NEIGHBOURHOOD:
			return {
				[action.payload]: action.payload,
			};
		case "lit-district":
			const districtIds = {
				title: "district",
			};
			for (let i = 0; i < action.payload.length; i++) {
				districtIds[action.payload[i].id] = action.payload[i].id;
			}

			return districtIds;
		case "lit-map-district":
			return {
				...state,
				districtId: action.payload,
			};
		default:
			return state;
	}
};
