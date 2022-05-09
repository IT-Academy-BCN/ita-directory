import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'
import CheckBox from '../../../components/atoms/CheckBox'
import AsyncButton from '../../../components/atoms/Button'
import { Container, Form, RedirectStyled } from '../UserFlow.styles'
import InputGroup from '../../../components/molecules/InputGroup'
import registerSchema from '../../../validation/registerUserSchema'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import { ContainerCheckBox, SentenceCheckBox } from './Registration.styles'
import axiosInstance from '../../../utils/axiosInstance'

function Register() {
  const [animated, setAnimated] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })
  const dispatch = useDispatch()

  const registerUser = async (user) => {
    try {
      const response = await axiosInstance.post('/users/v1/register', user)
      if (response.data.code === 'error') {
        dispatch(
          newNotification({
            message: response.data.code,
            type: NotificationTypes.error,
          })
        )
        throw response.data.message
      }
      dispatch(
        newNotification({
          message: 'Your account has been successfully created!',
          type: NotificationTypes.succes,
        })
      )
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
    const { name, lastname, email, password, privacy } = data
    setAnimated(true)
    setIsDisabled(true)
    setIsLoading(true)

    registerUser({
      name,
      lastnames: lastname,
      email,
      password,
      privacy,
    })
    setTimeout(() => {
      setAnimated(false)
      setIsDisabled(false)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <Body title="Registro" justifyTitle="center">
      <Container>
        <Form onSubmit={handleSubmit(submitForm)} noValidate>
          <InputGroup
            label="text"
            type="text"
            placeholder="Nombre"
            id="name"
            name="name"
            disabled={disabled}
            className="w-full"
            error={errors.name?.message}
            register={register('name')}
          />

          <InputGroup
            label="text"
            type="text"
            placeholder="Apellido"
            id="lastname"
            name="lastname"
            disabled={disabled}
            className="w-full"
            error={errors.lastname?.message}
            register={register('lastname')}
          />

          <InputGroup
            label="email"
            type="email"
            placeholder="Email"
            id="emailName"
            name="email"
            disabled={disabled}
            className="w-full"
            error={errors.email?.message}
            register={register('email')}
          />

          <InputGroup
            label="password"
            type="password"
            placeholder="Contraseña"
            id="password"
            name="password"
            disabled={disabled}
            className="w-full mt-2"
            error={errors.password?.message}
            register={register('password')}
          />
          <ContainerCheckBox className="w-full mt-2">
            <CheckBox
              id="privacyPolicy"
              name="privacyPolicy"
              className="w-full mt-2"
              error={errors.privacy?.message}
              register={register('privacy')}
            />
            <SentenceCheckBox>
              Acepto la <Link to="#">politica de privacidad</Link>.
            </SentenceCheckBox>
          </ContainerCheckBox>
          <AsyncButton
            text="Registrarme"
            loadingText="Registrando..."
            iconPosition="left"
            type="submit"
            className="w-full my-8 orange-gradient"
            isLoading={isLoading}
            animated={animated}
            onClick={submitForm}
          />
          <RedirectStyled>
            Tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </RedirectStyled>
        </Form>
      </Container>
    </Body>
  )
}

export default Register
