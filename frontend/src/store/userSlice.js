import {createSlice} from "@reduxjs/toolkit";

import {renewToken} from "./userThunk";

const initialState = {
	value: {
		user: {},
		token: localStorage.getItem("token"),
	},
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.value.user = action.payload;
		},
		logout: (state) => {
			state.value = null;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(renewToken.fulfilled, (state, action) => {
			state.value.token = action.payload;
		});

		builder.addCase(renewToken.rejected, (state, action) => {
			localStorage.removeItem("token");
			localStorage.removeItem("refreshToken");
			state.value.user = {};
			state.value.token = "";
		});
	},
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
