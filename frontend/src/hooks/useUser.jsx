import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/userSlice'
import axiosInstance from '../utils/axiosInstance'
import urls from '../utils/urls'

export default function useUser() {
  //hook(redux)=>access to all actions.type
  const dispatch = useDispatch()
  //hook (redux)=>//It takes in a function argument that returns the part of the state that you want:
  // 1)value (user data object) - 2)isLoggedIn
  const user = useSelector((s) => s.user.value)
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)

  //hook (react)=> like useMemo(), but it memoizes functions instead of values
  // meanning: get data user first time, and if re-renders don't render again.
  const getUser = useCallback(async () => {
    // user data object
    const userData = await axiosInstance.get(urls.user).then((response) => response.data)
    // if user data object exists=>payload===user data object&& type===user/login
    //  meaning: user exists, set state login to this user
    if (userData) dispatch(login(userData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    //meaning: if not logged and token exists=>get user data object and load it in state,
    // [when callback change or state isLoggedIn change]
    if (!isLoggedIn && token) {
      getUser()
    }
  }, [getUser, isLoggedIn])

  if (user) {
    return user
  }
  return null
}
