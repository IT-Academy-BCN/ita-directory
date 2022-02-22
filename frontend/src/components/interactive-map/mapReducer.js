export const mapReducer = (state, action) => {
	switch (action.type) {
		case "lit-area":
			return {
				[action.payload]: action.payload,
			};
		case "lit-district":
			const districtIds = {};
			for (let i = 0; i < action.payload.length; i++) {
				districtIds[action.payload[i].id] = action.payload[i].id;
			}

			return districtIds;

		default:
			return state;
	}
};
