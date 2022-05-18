import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'
import { Button } from '../../../components/atoms'
import { Container, Form, RedirectStyled } from '../UserFlow.styles'
import { InputGroup } from '../../../components/molecules'
import loginSchema from '../../../validation/loginSchema'
import { login } from '../../../store/userSlice'
import axiosInstance from '../../../utils/axiosInstance'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import Urls from '../../../utils/urls'

function Login() {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  const loginUser = async (user) => {
    try {
      const response = await axios.post(Urls.login, user)
      dispatch(
        newNotification({
          message: response.data.message,
          type: NotificationTypes.succes,
        })
      )

      if (response) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refreshToken', response.data.refreshToken)

        const userData = await axiosInstance
          .get(`/users/v1/get-me`)
          // eslint-disable-next-line no-shadow
          .then((response) => response.data)

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
    loginUser({
      email,
      password,
    })
  }

  return (
    <Body title="Acceso" isLoggedIn={false} justifyTitle="center">
      <Container>
        <Form onSubmit={handleSubmit(submitForm)} noValidate>
          <InputGroup
            label="Email"
            hiddenLabel
            type="email"
            placeholder="Introduce tu email"
            id="emailName"
            name="email"
            className="w-full"
            error={errors.email?.message}
            register={register('email')}
          />
          <InputGroup
            label="Password"
            hiddenLabel
            type="password"
            placeholder="Introduce tu contraseña"
            id="passName"
            name="password"
            className="w-full mt-2"
            error={errors.password?.message}
            register={register('password')}
          />
          <Button
            text="Acceder"
            loadingText="Accediendo"
            iconPosition="left"
            type="submit"
            className="blue-gradient w-full my-8"
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
