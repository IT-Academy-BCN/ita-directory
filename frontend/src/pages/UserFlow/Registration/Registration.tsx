import React from 'react'
import axios, { AxiosError } from 'axios'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'
import { Button, CheckBox, Text } from '../../../components/atoms'
import { Container, Form } from '../UserFlow.styles'
import { InputGroup } from '../../../components/molecules'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import { ContainerCheckBox, SentenceCheckBox } from './Registration.styles'
import axiosInstance from '../../../utils/axiosInstance'
import { urls } from '../../../utils'

type TData = {
  code: string
  header: string
  message: string
}

const regex: any = import.meta.env.VITE_PASSWORD_REGEX

const registerSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, { message: 'This field is required.' }),
  lastname: z
    .string({ required_error: 'Last name is required' })
    .min(1, { message: 'This field is required.' }),
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, { message: 'This field is required.' })
    .email('Must be a valid email'),
  password: z
    .string({ required_error: 'This field is required' })
    .min(6, { message: 'Password is too short, 6 characters minimum.' })
    .regex(new RegExp(regex), {
      message:
        'Must contain a special character (@ $ ! % * # ? &), at least one number, one lowercase letter, and one uppercase letter.',
    }),
  privacy: z.boolean({ required_error: 'This field is required' }),
})

type TUserData = z.infer<typeof registerSchema>

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserData>({
    resolver: zodResolver(registerSchema),
  })
  const dispatch = useDispatch()

  const registerUser = async (user: TUserData) => {
    try {
      const { data } = await axiosInstance.post<TData>(urls.register, user)

      dispatch(
        newNotification({
          message: data.message,
          type: NotificationTypes.succes,
        })
      )
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const error = err as AxiosError<TData>
        dispatch(
          newNotification({
            message: `Sorry, connection failed: "${error.response?.data.message}". Please, try later.`,
            type: NotificationTypes.error,
          })
        )
      } else {
        throw new Error(`${err}`)
      }
    }
  }

  const submitForm: SubmitHandler<TUserData> = (data) => {
    const { name, lastname, email, password, privacy } = data
    registerUser({
      name,
      lastname,
      email,
      password,
      privacy,
    })
  }

  return (
    <Body title="Registro" justifyTitle="center">
      <Container>
        <Form onSubmit={handleSubmit(submitForm)} noValidate>
          <InputGroup
            label="text"
            hiddenLabel
            type="text"
            placeholder="Nombre"
            id="name"
            name="name"
            className="w-full"
            error={errors.name?.message}
            register={register('name')}
          />
          <InputGroup
            label="text"
            hiddenLabel
            type="text"
            placeholder="Apellido"
            id="lastname"
            name="lastname"
            className="w-full"
            error={errors.lastname?.message}
            register={register('lastname')}
          />
          <InputGroup
            label="email"
            hiddenLabel
            type="email"
            placeholder="Email"
            id="emailName"
            name="email"
            error={errors.email?.message}
            register={register('email')}
          />
          <InputGroup
            label="password"
            hiddenLabel
            type="password"
            placeholder="Contraseña"
            id="password"
            name="password"
            className="w-full"
            error={errors.password?.message}
            register={register('password')}
          />
          <ContainerCheckBox className="w-full mt-2">
            <CheckBox
              id="privacy-policy"
              name="privacy-policy"
              error={errors.privacy?.message}
              register={register('privacy')}
            />
            <SentenceCheckBox>
              Acepto la <Link to="#">politica de privacidad</Link>.
            </SentenceCheckBox>
          </ContainerCheckBox>
          <Button
            text="Registrarme"
            loadingText="Registrando..."
            iconPosition="left"
            type="submit"
            className="orange-gradient"
          />
          <Text>
            Tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </Text>
        </Form>
      </Container>
    </Body>
  )
}

export default Register
