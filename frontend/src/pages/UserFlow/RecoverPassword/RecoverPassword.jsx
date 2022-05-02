import { useEffect, useState } from 'react'
import axios from 'axios'

// Layout Components
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux'
import Body from '../../../components/layout/Body/Body'

// Units Components
import AsyncButton from '../../../components/atoms/Forms/Button'
import Input from '../../../components/atoms/Input/Input'

// Styles
import { Container, Form } from '../UserFlow.styles'

// Form validation
import recoverPasswordSchema from '../../../validation/recoverPasswordSchema'
import { newNotification, NotificationTypes } from '../../../store/notificationSlice'

function RecoverPassword() {
  const [animatedState, setAnimatedState] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(recoverPasswordSchema),
  })

  const submitForm = (data) => {
    const { email } = data
    sendEmail(email)
  }

  const sendEmail = async (email) => {
    setAnimatedState(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsLoading(false)
    }, 2000)

    try {
      const response = await axios.post(
        `${import.meta.env.REACT_APP_API_URL}/users/v1/recover-password`,
        email
      )
      response.data.message === 'Access token granted.' ? setIsSuccess(true) : setIsSuccess(false)
      setMessage('The instructions to recover your password has been sent to your email')
      dispatch(
        newNotification({
          message,
          type: NotificationTypes.succes,
        })
      )
    } catch (error) {
      if (error.name === 'Error') {
        setIsSuccess(false)
        setMessage(`Sorry, connection failed: "${error.message}". Please, try later.`)
        dispatch(
          newNotification({
            message,
            type: NotificationTypes.error,
          })
        )
      }
    }
  }

  useEffect(() => {
    if (message) {
      dispatch(
        newNotification({
          message: message,
          type: isSuccess ? NotificationTypes.succes : NotificationTypes.error,
        })
      )
      setMessage(null)
    }
  })

  return (
    <div>
      <Body title="Cambiar contraseña" justifyTitle="center">
        <Container>
          <Form onSubmit={handleSubmit(submitForm)} noValidation>
            <Input
              type="email"
              name="email"
              placeholder="enter your email"
              register={register('email')}
              error={errors.email?.message}
            />
            <AsyncButton
              text="Enviar"
              loadingText="Enviando"
              iconPosition="left"
              type="submit"
              className="w-full blue-gradient mt-6"
              isLoading={isLoading}
              animated={animatedState}
            />
          </Form>
        </Container>
      </Body>
    </div>
  )
}

export default RecoverPassword
