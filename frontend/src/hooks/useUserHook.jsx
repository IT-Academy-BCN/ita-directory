import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { login } from '../store/userSlice'
import store from '../store/store'
import axiosInstance from '../utils/axiosInstance'
import urls from '../utils/urls'

const getMe = async () => {
  try {
    const userData = await axiosInstance.get(urls.user).then((response) => response.data)
    if (userData) store.dispatch(login(userData))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export default function useUser() {
  // @ts-ignore
  const user = useSelector((s) => s.user.value)
  // @ts-ignore
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!isLoggedIn && token) {
      getMe()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getMe, isLoggedIn])

  if (user) {
    return user
  }
  return null
}
