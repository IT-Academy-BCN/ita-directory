import { useState } from 'react'
import axios from 'axios'

// Layout Components
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'

// Units Components
import AsyncButton from '../../../components/atoms/Button'
import Input from '../../../components/atoms/Forms/Input'

// Styles
import { Container, Form } from '../UserFlow.styles'

// Form validation
import recoverPasswordSchema from '../../../validation/recoverPasswordSchema'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'
import Text from '../../../components/atoms/Text'

function RecoverPassword() {
  const [animatedState, setAnimatedState] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(recoverPasswordSchema),
  })

  const sendEmail = async (data) => {
    setAnimatedState(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsLoading(false)
    }, 2000)

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/recover-password`, data)
      dispatch(
        newNotification({
          message: 'The instructions to recover your password has been sent to your email',
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
    sendEmail(data)
  }

  return (
    <Body title="Cambiar contraseña" justifyTitle="center">
      <Container>
        <Form onSubmit={handleSubmit(submitForm)} noValidation>
          <Text
            text={
              <>
                <b>¿Has olvidado tu contraseña?</b> Para recuperarla introduce tu email y te
                enviaremos una nueva por correo.
              </>
            }
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            register={register('email')}
            error={errors.email?.message}
          />
          <AsyncButton
            text="Enviar"
            loadingText="Enviando"
            iconPosition="left"
            type="submit"
            className="w-full orange-gradient mt-6 shadow-lg"
            isLoading={isLoading}
            animated={animatedState}
          />
        </Form>
      </Container>
    </Body>
  )
}

export default RecoverPassword
