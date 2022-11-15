import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'
import { Button, Text } from '../../../components/atoms'
import { Container, Form, RedirectStyled } from '../UserFlow.styles'
import { InputGroup } from '../../../components/molecules'
import { login } from '../../../store/userSlice'
import axiosInstance from '../../../utils/axiosInstance'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import { urls } from '../../../utils'

const regex = import.meta.env.VITE_PASSWORD_REGEX

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'This field is required.' })
    .email({ message: 'Must be a valid email' }),
  password: z
    .string({ required_error: 'No password provided' })
    .min(6, { message: 'Password is too short, 6 characters minimum.' })
    .regex(
      new RegExp(regex),
      'Must contain a special character (@ $ ! % * # ? &), at least one number, one lowercase letter, and one uppercase letter.'
    ),
})

function Login() {
  const [userLogged, setUserLogged] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    const userIsLogin = window.localStorage.getItem('token')

    const refreshUserIsLogin = window.localStorage.getItem('refreshToken')

    if (userIsLogin && refreshUserIsLogin) {
      setUserLogged(true)
    } else {
      setUserLogged(false)
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const loginUser = async (user) => {
    try {
      const response = await axios.post(urls.login, user)
      dispatch(
        newNotification({
          message: response.data.message,
          type: NotificationTypes.succes,
        })
      )

      if (response) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refreshToken', response.data.refreshToken)
        history.push('/')
        const userData = await axiosInstance.get(urls.users).then((res) => res.data)

        if (userData) {
          dispatch(login(userData))
        }
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
        {userLogged ? (
          <Text text="Ya estas logueado" />
        ) : (
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
              error={errors.password?.message}
              register={register('password')}
            />
            <Button
              text="Acceder"
              loadingText="Accediendo"
              iconPosition="left"
              type="submit"
              className="blue-gradient"
              data-testid="formLoginButton"
            />
            <div>
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
        )}
      </Container>
    </Body>
  )
}

export default Login
