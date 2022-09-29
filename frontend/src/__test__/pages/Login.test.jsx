/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-describe-callback */
import React from 'react'
import * as ReactRedux from 'react-redux'
import axios from 'axios'
import store from '../../store/store'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Login from '../../pages/UserFlow/Login/Login'

const { Provider } = ReactRedux
axios.defaults.baseURL = import.meta.env.VITE_API_URL


describe('Login', async () => {
  it('should render the Login', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    )

    const loginButton = screen.getByRole('button')
    expect(loginButton).toBeInTheDocument()
  })

  it('should render the Login (by placeholder)', () => {
    
    render(
      <Provider store={store}><Login />
      </Provider>)

    const loginPlaceHolderText = screen.getAllByPlaceholderText('Introduce tu contraseña')
    expect(loginPlaceHolderText).toBeInTheDocument()
  })

  it('should render the Login (by label)', () => {
    render(<Login />)

    const loginLabel = screen.getByLabelText('Email')
    expect(loginLabel).toBeInTheDocument()
  })
})
