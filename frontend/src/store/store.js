import * as reduxToolkit from '@reduxjs/toolkit'
import userReducer from './userSlice'
import notificationReducer from './notificationSlice'

const { configureStore } = reduxToolkit

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
  },
})
