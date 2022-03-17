import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	value: {},
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
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
