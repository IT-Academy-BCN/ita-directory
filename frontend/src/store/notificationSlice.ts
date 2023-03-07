import { createSlice } from '@reduxjs/toolkit'

const NotificationTypes = { error: 'error', info: 'info', succes: 'succes', warning: 'warning' }

let id = 0
let icon = ''
let color = ''

const addIdAndIcon = (notification) => {
  id += 1
  switch (notification.type) {
    case NotificationTypes.error:
      icon = 'cancel'
      color = 'red'
      break

    case NotificationTypes.succes:
      icon = 'check_circle'
      color = 'green'
      break

    case NotificationTypes.info:
      icon = 'info'
      color = 'blue'
      break

    default:
      icon = 'warning'
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
