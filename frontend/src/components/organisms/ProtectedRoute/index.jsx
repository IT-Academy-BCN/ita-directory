import React, { useEffect, useCallback } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import axiosInstance from '../../../utils/axiosInstance'
import { login } from '../../../store/userSlice'

function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const getUser = useCallback(async () => {
    const userData = await axiosInstance.get(`/users/v1/get-me`).then((response) => response.data)
    if (userData) dispatch(login(userData))
  }, [dispatch])

  useEffect(() => {
    getUser()
  }, [getUser])

  return <Route {...rest}>{!token ? <Redirect to="/login" /> : children}</Route>
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
}

export default ProtectedRoute
