import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  value: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.value.user = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.value = null
    },
  },
})

export const { login, logout } = userSlice.actions
export const selectUser = (state) => state.user
export default userSlice.reducer
