import {createSlice, current} from "@reduxjs/toolkit";

const NotificationTypes = {error: "error", info: "info", succes: "succes"};

export const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		notifications: [],
	},
	reducers: {
		newNotification: (state, action) => {
			state.notifications.push({
				message: action.payload.message,
				type: action.payload.type,
			});
			console.log(current(state));
		},
		deleteNotification: (state, action) => {
			state.notifications = state.notifications.filter(item => item.id !== action.payload);
			console.log('deleteWorking');
		},
	},
});

export {NotificationTypes};
export const {newNotification, deleteNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
