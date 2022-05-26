import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'
import { Button, Text } from '../../../components/atoms'
import { Container, Form, RedirectStyled } from '../UserFlow.styles'
import { InputGroup } from '../../../components/molecules'
import { login } from '../../../store/userSlice'
import axiosInstance from '../../../utils/axiosInstance'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import Urls from '../../../utils/urls'

const loginSchema = yup.object().shape({
  email: yup.string().email('must be a valid email').required('email is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
  /* .matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
			"Debe contener un carácter especial (@ $ ! % * # ? &) y al menos un número"
		), */
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
        history.push('/')
        const userData = await axiosInstance.get(`/users/v1/get-me`).then((res) => res.data)

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
