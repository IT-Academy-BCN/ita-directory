import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import alertReducer from "./alertSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		notifications: alertReducer,
	},
});
