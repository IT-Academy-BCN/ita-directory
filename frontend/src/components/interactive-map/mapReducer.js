export const mapReducer = (state, action) => {
	switch (action.type) {
		case "swap-area":
			return action.payload;
		default:
			return state;
	}
};
