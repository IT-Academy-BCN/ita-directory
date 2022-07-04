import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/userSlice'
import axiosInstance from '../utils/axiosInstance'

export default function useUser() {
  const dispatch = useDispatch()
  const user = useSelector((s) => s.user.value)
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)

  const getUser = useCallback(async () => {
    const userData = await axiosInstance.get(`/users/v1/get-me`).then((response) => response.data)
    if (userData) dispatch(login(userData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isLoggedIn) {
      getUser()
    }
  }, [getUser, isLoggedIn])

  if (user) return user
  return null
}
