import {faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {createSlice, current} from "@reduxjs/toolkit";

const NotificationTypes = {error: "error", info: "info", succes: "succes", warning: "warning"};

let id = 0;
let icon = '';

const addIdandIcon = (notification) => {
	id = id + 1;
	switch (notification.type) {
		case NotificationTypes.error:
			icon = faExclamationCircle;
		case NotificationTypes.succes:
			icon = faCheckCircle;
		case NotificationTypes.info:
			icon = faInfoCircle;
		case NotificationTypes.warning:
			icon = faExclamationTriangle;
		default:
			break;
	}
	return {
		...notification, id, icon
	}
}

export const notificationSlice = createSlice({
	name: "notification",
	initialState: {
		notifications: [],
	},
	reducers: {
		newNotification: (state, action) => {
			state.notifications.push(addIdandIcon(action.payload));
			console.log(current(state))
		},
		deleteNotification: (state, action) => {
			state.notifications.splice(action.payload, 1);
		}
	},
});

export {NotificationTypes};
export const {newNotification, deleteNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
