import React, { useEffect, useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import axiosInstance from '../../utils/axiosInstance'
import { login } from '../../store/userSlice'
import urls from '../../utils/urls'

function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const getUser = useCallback(async () => {
    const userData = await axiosInstance.get(urls.user).then((response) => response.data)
    if (userData) dispatch(login(userData))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getUser()
  }, [getUser])

  if (!token) return <Redirect to="/login" />
  return <Route {...rest}>{children}</Route>
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
}

export default ProtectedRoute
