import React, { useState } from 'react'
import Input from 'components/units/Input/Input'
import AsyncButton from 'components/units/AsyncButton/AsyncButton'
import { StyledError, StyledForm } from './styles'

import Body from 'components/layout/Body/Body'


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

const initialState = { email: '', password: '' }

const Login = (onLogin) => {
  const [state, setState] = useState(initialState)
  const [error, setError] = useState('')
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
  const [isPassError, setIsPassError] = useState(false)

  const handleInputOnChange = (e) => {
    const val = e.target.value
    const isEmail = validateEmail(val)
    setState(val)
    setIsEmailError(!isEmail)
  }

  const handleInputPassOnChange = (e) => {
    const valPass = e.target.value
    const isPass = validatePassword(valPass)
    setState(valPass)
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

    let { email, password } = event.target.value

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
    <Body>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type='email'
          placeholder='Introduce tu email'
          value={state.email}
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
          value={state.password}
          onChange={handleInputPassOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id='passName'
          name='passName'
          error={isPassError}
          disabled={disabled}
        />
        {error && (
          <StyledError>
            <p>{error}</p>
          </StyledError>
        )}
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
    </Body>
  )
}

export default Login
