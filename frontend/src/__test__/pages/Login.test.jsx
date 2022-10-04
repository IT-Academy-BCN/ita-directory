/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-describe-callback */
import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Login from '../../pages/UserFlow/Login/Login'
import store from '../../store/store'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('Login', async () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should render the Login', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const loginButton = screen.getByTestId('formLoginButton')
    expect(loginButton).toBeInTheDocument()
  })

  it('should tell you are already logged if you logged', () => {
    window.localStorage.setItem('token', 'true')
    window.localStorage.setItem('refreshToken', 'false')
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const logggedInMessage = screen.getByText('Ya estas logueado')
    expect(logggedInMessage).toBeInTheDocument()
  })

  it('should render logged message if you were logged and refreshed', () => {
    window.localStorage.setItem('token', 'false')
    window.localStorage.setItem('refreshToken', 'true')
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const logggedInMessage = screen.getByText('Ya estas logueado')
    expect(logggedInMessage).toBeInTheDocument()
  })

  it('should not render the login form if already logged', () => {
    window.localStorage.setItem('token', 'true')
    window.localStorage.setItem('refreshToken', 'true')
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const loginButton = screen.queryByTestId('formLoginButton')
    expect(loginButton).not.toBeInTheDocument()
  })

  it('should show error message if wrong email', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText('Email')
    fireEvent.change(emailInput, { target: { value: 'wrong email' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    await waitFor(() => expect(screen.getByText('must be a valid email')).toBeInTheDocument())
  })

  it('should show error message if no email is provided', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const emailInput = screen.getByLabelText('Email')
    fireEvent.change(emailInput, { target: { value: '' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    await waitFor(() => expect(screen.getByText('email is required')).toBeInTheDocument())
  })

  it('should show error message if no password is provided', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(passwordInput, { target: { value: '' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    await waitFor(() => expect(screen.getByText('No password provided.')).toBeInTheDocument())
  })

  it('should show error message if password is too short', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(passwordInput, { target: { value: '12345' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    await waitFor(() =>
      expect(
        screen.getByText('Password is too short - should be 6 chars minimum.')
      ).toBeInTheDocument()
    )
  })
/* 
  it.only('should show error message if password does not match RegEx', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </BrowserRouter>
    )

    const passwordInput = screen.getByLabelText('Password')
    fireEvent.change(passwordInput, { target: { value: '1234567' } })
    const loginButton = screen.queryByTestId('formLoginButton')
    fireEvent.click(loginButton)
    await waitFor(() =>
      expect(
        screen.getByText('Must contain a special character (@ $ ! % * # ? &), at least one number, one lowercase letter, and one uppercase letter.')
      ).toBeInTheDocument()
    )
  }) */
})
