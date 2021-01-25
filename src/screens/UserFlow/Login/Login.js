import React, { useState } from 'react'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'
import StyledForm from './styles'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*?[A-Z]).{6,}$/

const validateEmail = (email) => EMAIL_REGEX.test((email).toLowerCase())
const validatePassword = (password) => PASSWORD_REGEX.test(password)

const users = [{
  email: 'juan@mail.com',
  password: 'Juan1992'
}]

const authenticateUser = (email, password) => {
  if (users.email === email && users.password === password) console.log('the user is correct')
  else console.log('the user is incorrect')
}

const Login = (onLogin) => {
  const [error, setError] = useState()
  const [animatedState, setAnimatedState] = useState(false)
  const [disabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setAnimatedState(true)
    setIsDisabled(true)
    setIsLoading(true)
    setTimeout(() => {
      setAnimatedState(false)
      setIsDisabled(false)
      setIsLoading(false)
    }, 5000)
  }

  // value - handleChange
  const [isEmailError, setIsEmailError] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [isPassError, setIsPassError] = useState(false)
  const [passValue, setPassValue] = useState('')

  const handleInputOnChange = (e) => {
    const val = e.target.value
    const isEmail = validateEmail(val)
    setEmailValue(val)
    setIsEmailError(!isEmail)
  }

  const handleInputPassOnChange = (e) => {
    const valPass = e.target.value
    const isPass = validatePassword(valPass)
    setPassValue(valPass)
    setIsPassError(!isPass)
  }

  const handleFocus = () => {
    console.log('He pinchado dentro')
  }

  const handleBlur = () => {
    console.log('He pinchado fuera')
  }

  const handleSubmit = event => {
    event.preventDefault()

    let { email, password } = event.target

    email = email.value
    password = password.value

    try {
      authenticateUser(email, password, (error, token) => {
        if (error) return setError(error.message)

        onLogin(token)
      })
    } catch ({ message }) {
      setError(message)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type='email'
        placeholder='Introduce tu email'
        value={emailValue}
        onChange={handleInputOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id='emailName'
        name='emailName'
        error={isEmailError}
        disabled={disabled}
      />
      <Input
        type='password'
        placeholder='Introduce tu contraseña'
        value={passValue}
        onChange={handleInputPassOnChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id='passName'
        name='passName'
        error={isPassError}
        disabled={disabled}
      />
      <AsyncButton
        text='Acceder'
        loadingText='Accediendo'
        iconPosition='left'
        type='submit'
        className='blueGradient'
        textStyles={{ marginLeft: 10 }}
        onClick={handleClick}
        isLoading={isLoading}
        animated={animatedState}
        disabled={disabled}
      />
    </StyledForm>
  )
}

export default Login
