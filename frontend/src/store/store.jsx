import * as reduxToolkit from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const {configureStore} = reduxToolkit;

export default configureStore({
	reducer: {
		user: userReducer,
	},
});
