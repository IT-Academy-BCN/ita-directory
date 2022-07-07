import { createLogger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import notificationReducer from './notificationSlice'

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.MODE === 'development') {
      return [...getDefaultMiddleware(), logger]
    }
    return getDefaultMiddleware()
  },
})
