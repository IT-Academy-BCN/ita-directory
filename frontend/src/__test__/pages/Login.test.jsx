/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-describe-callback */
import React from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Login from '../../pages/UserFlow/Login/Login'
import store from '../../store/store'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

describe('Login', async () => {
  it.only('should render the Login', () => {
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

  it('should render the Login (by placeholder)', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    )

    const loginPlaceHolderText = screen.getAllByPlaceholderText('Introduce tu contraseña')
    expect(loginPlaceHolderText).toBeInTheDocument()
  })

  it('should render the Login (by label)', () => {
    render(<Login />)

    const loginLabel = screen.getByLabelText('Email')
    expect(loginLabel).toBeInTheDocument()
  })
})
