import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/userSlice'
import axiosInstance from '../utils/axiosInstance'
import urls from '../utils/urls'
// import memoizeUser from '../utils/memoizeFunction'

let isCalled = false
// const useUser = memoizeUser(
function useUser() {
  const dispatch = useDispatch()
  const user = useSelector((s) => s.user.value)
  const isLoggedIn = useSelector((s) => s.user.isLoggedIn)

  const getUser = useCallback(async () => {
    const userData = await axiosInstance.get(urls.user).then((response) => response.data)

    if (userData) dispatch(login(userData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!isLoggedIn && token && !isCalled) {
      isCalled = true
      getUser()
    }
  }, [getUser, isLoggedIn])

  if (user) {
    // setUserObject(user)
    return user
  }
  return null
}
// )

export default useUser
