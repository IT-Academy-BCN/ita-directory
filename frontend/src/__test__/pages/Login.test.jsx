import React from 'react'
import axios from 'axios'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '../test-utils'
import Login from '../../pages/UserFlow/Login/Login'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('Login', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should render the Login', () => {
    render(<Login />)

    const loginButton = screen.getByTestId('formLoginButton')
    expect(loginButton).toBeInTheDocument()
  })

  it('should tell you are already logged if you logged', () => {
    window.localStorage.setItem('token', 'true')
    window.localStorage.setItem('refreshToken', 'false')
    render(<Login />)

    const logggedInMessage = screen.getByText('Ya estas logueado')
    expect(logggedInMessage).toBeInTheDocument()
  })

  it('should render logged message if you were logged and refreshed', () => {
    window.localStorage.setItem('token', 'false')
    window.localStorage.setItem('refreshToken', 'true')
    render(<Login />)

    const logggedInMessage = screen.getByText('Ya estas logueado')
    expect(logggedInMessage).toBeInTheDocument()
  })

  it('should not render the login form if already logged', () => {
    window.localStorage.setItem('token', 'true')
    window.localStorage.setItem('refreshToken', 'true')
    render(<Login />)

    const loginButton = screen.queryByTestId('formLoginButton')
    expect(loginButton).not.toBeInTheDocument()
  })

  it('should show error message if wrong email', async () => {
    render(<Login />)

    const emailInput = screen.getByLabelText('Email')
    fireEvent.change(emailInput, { target: { value: 'wrong email' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    expect(await screen.findByText('must be a valid email')).toBeInTheDocument()
  })

  it('should show error message if no email is provided', async () => {
    render(<Login />)

    const emailInput = screen.getByLabelText('Email')
    fireEvent.change(emailInput, { target: { value: '' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    expect(await screen.findByText('email is required')).toBeInTheDocument()
  })

  it('should show error message if no password is provided', async () => {
    render(<Login />)

    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(passwordInput, { target: { value: '' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    expect(await screen.findByText('No password provided.')).toBeInTheDocument()
  })

  it('should show error message if password is too short', async () => {
    render(<Login />)

    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(passwordInput, { target: { value: '1aB' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    expect(
      await screen.findByText('Password is too short - should be 6 chars minimum.')
    ).toBeInTheDocument()
  })

  // TODO: Fix password test when using RegEx
  // TODO: Add unique tests for lowercase, uppercase, special character and number.
  it.skip('should show error message if password does not match RegEx', async () => {
    render(<Login />)

    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(passwordInput, { target: { value: '1234564' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    expect(
      await screen.findByText(
        'Must contain a special character (@ $ ! % * # ? &), at least one number, one lowercase letter, and one uppercase letter.'
      )
    ).toBeInTheDocument()
  })
})
