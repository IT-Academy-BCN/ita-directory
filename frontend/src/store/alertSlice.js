import {createSlice} from "@reduxjs/toolkit";

export const alertSlice = createSlice({
	name: "alert",
	initialState: {
		alerts: [],
	},
	reducers: {
		createAlert: (state, action) => {
			state.alerts.push({
				message: action.payload.message,
				type: action.payload.type,
			});
		},
	},
});

export const actions = alertSlice.actions;

export default alertSlice.reducer;
