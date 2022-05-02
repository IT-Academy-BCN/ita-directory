import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
<<<<<<< HEAD
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
=======
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
>>>>>>> develop
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'
import AsyncButton from '../../../components/atoms/Button/Button'
import { Container, Form, RedirectStyled } from '../UserFlow.styles'
<<<<<<< HEAD
import Input from '../../../components/atoms/Input/Input'

import loginSchema from '../../../validation/loginSchema'

import { login } from '../../../store/userSlice'

=======
import { InputGroup } from '../../../components/molecules'
import loginSchema from '../../../validation/loginSchema'
import { login } from '../../../store/userSlice'
>>>>>>> develop
import axiosInstance from '../../../utils/axiosInstance'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import Urls from '../../../utils/urls'

function Login() {
  const dispatch = useDispatch()

  const [animated, setAnimated] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })
  // ! From backend: we change process.env.VITE_REACT_APP_API_URL for testig the user login.
  const loginUser = async (user) => {
    try {
<<<<<<< HEAD
      const response = await axios.post(`http://localhost:10910/users/v1/login`, user)
=======
      const response = await axios.post(Urls.login, user)
>>>>>>> develop
      dispatch(
        newNotification({
          message: response.data.message,
          type: NotificationTypes.success,
        })
      )

      if (response) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refreshToken', response.data.refreshToken)
<<<<<<< HEAD
        const userData = await axiosInstance.get(`/users/v1/get_me`).then((res) => res.data)
=======

        const userData = await axiosInstance
          .get(`/users/v1/get_me`)
          // eslint-disable-next-line no-shadow
          .then((response) => response.data)
>>>>>>> develop

        if (userData) dispatch(login(userData))
      }

      if (response.data.code === 'error') {
        dispatch(
          newNotification({
            message: response.data.message,
            type: NotificationTypes.error,
          })
        )
      }
    } catch (error) {
      dispatch(
        newNotification({
          message: `Sorry, connection failed: "${error.message}". Please, try later.`,
          type: NotificationTypes.error,
        })
      )
    }
  }

  const submitForm = (data) => {
    const { email, password } = data
    setIsDisabled(true)
    setIsLoading(true)
    setAnimated(true)
    setTimeout(() => {
      setIsDisabled(false)
      setIsLoading(false)
      setAnimated(false)
      loginUser({
        email,
        password,
      })
      setTimeout(() => {
        setIsDisabled(false)
        setIsLoading(false)
      }, 2000)
    })
  }

  return (
    <Body title="Acceso" isLoggedIn={false} justifyTitle="center">
      <Container>
        <Form onSubmit={handleSubmit(submitForm)} noValidate>
<<<<<<< HEAD
          <Input
=======
          <InputGroup
            label="email"
>>>>>>> develop
            type="email"
            placeholder="Introduce tu email"
            id="emailName"
            name="email"
            disabled={disabled}
            className="w-full"
            error={errors.email?.message}
            register={register('email')}
          />
<<<<<<< HEAD
          <Input
=======
          <InputGroup
            label="password"
>>>>>>> develop
            type="password"
            placeholder="Introduce tu contraseña"
            id="passName"
            name="password"
            disabled={disabled}
            className="w-full mt-2"
            error={errors.password?.message}
            register={register('password')}
          />
          <AsyncButton
            text="Acceder"
            loadingText="Accediendo"
            iconPosition="left"
            type="submit"
            className="blue-gradient w-full my-8"
            isLoading={isLoading}
            animated={animated}
          />
          <div className="w-full">
            <RedirectStyled>
              Has olvidado tu contraseña?
              <Link to="/recover-password">Recupérala</Link>
            </RedirectStyled>
            <RedirectStyled>
              No tienes cuenta?
              <Link to="/register">Regístrate</Link>
            </RedirectStyled>
          </div>
        </Form>
      </Container>
    </Body>
  )
}

export default Login
