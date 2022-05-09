import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'
import { createSlice } from '@reduxjs/toolkit'

const NotificationTypes = { error: 'error', info: 'info', succes: 'succes', warning: 'warning' }

let id = 0
let icon = ''
let color = ''

const addIdAndIcon = (notification) => {
  id += 1
  switch (notification.type) {
    case NotificationTypes.error:
      icon = faExclamationCircle
      color = 'red'
      break

    case NotificationTypes.succes:
      icon = faCheckCircle
      color = 'green'
      break

    case NotificationTypes.info:
      icon = faInfoCircle
      color = 'blue'
      break

    default:
      icon = faExclamationTriangle
      color = 'orange'
      break
  }
  return {
    ...notification,
    id,
    icon,
    color,
  }
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: {},
  },
  reducers: {
    newNotification: (state, action) => {
      const notification = addIdAndIcon(action.payload)
      state.notifications[notification.id] = notification
    },
    deleteNotification: (state, action) => {
      delete state.notifications[action.payload]
    },
  },
})

export { NotificationTypes }
export const { newNotification, deleteNotification } = notificationSlice.actions
export default notificationSlice.reducer
