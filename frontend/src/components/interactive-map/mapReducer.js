export const mapReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "lit-area":
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
				districtId: action.payload,
			};
		default:
			return state;
	}
};
