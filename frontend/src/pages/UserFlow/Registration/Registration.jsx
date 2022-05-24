import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import { Body } from '../../../components/layout'
import { Button, CheckBox, Text } from '../../../components/atoms'
import { Container, Form } from '../UserFlow.styles'
import { InputGroup } from '../../../components/molecules'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import { ContainerCheckBox, SentenceCheckBox } from './Registration.styles'
import axiosInstance from '../../../utils/axiosInstance'

const registerSchema = yup.object().shape({
  name: yup.string().required('this field is required'),
  lastname: yup.string().required('this field is required'),
  email: yup.string().email('must be a valid email').required('email is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      'Debe contener un carácter especial (@ $ ! % * # ? &) y al menos un número'
    ),
  privacy: yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
})

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
    if (isValid) {
      registerUser({
        name,
        lastnames: lastname,
        email,
        password,
        privacy,
      })
    }
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
            onClick={submitForm}
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
