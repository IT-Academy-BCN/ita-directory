import { createLogger } from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import notificationReducer from './notificationSlice'
import { githubApi } from './services/githubApi'

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.MODE === 'development') {
      return [...getDefaultMiddleware().concat(githubApi.middleware), logger]
    }
    return getDefaultMiddleware().concat(githubApi.middleware)
  },
})

export type RootState = ReturnType<typeof configureStore.reducer>
