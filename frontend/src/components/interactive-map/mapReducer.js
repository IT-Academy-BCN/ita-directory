export const mapReducer = (state, action) => {
	switch (action.type) {
		case "swap-district":
			return action.payload;
		default:
			return state;
	}
};
