import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RecoverPassword } from '../../../pages'

const initialState = {
  user: {
    isLoggedIn: false,
    value: undefined,
  },
  notification: {
    notifications: {},
  },
}
const mockStore = configureStore()
const store = mockStore(initialState)

describe('<RecoverPassword>', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  it('shows an input with an "Email" placeholder', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RecoverPassword />
        </BrowserRouter>
      </Provider>
    )
    const input = screen.getByPlaceholderText(/email/i)
    expect(input).toBeInTheDocument()
  })

  it('pass valid email to test email input field', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RecoverPassword />
        </BrowserRouter>
      </Provider>
    )

    const input = screen.getByPlaceholderText(/email/i)
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    await userEvent.type(input, 'test@test.com')
    expect(input.value).toMatch(emailFormat)
  })

  it('should submit form', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <RecoverPassword />
        </BrowserRouter>
      </Provider>
    )
    const submitBtn = screen.getByRole('button', { name: /enviar/i })
    const email = { email: 'test@test.test' }
    const url = 'http://localhost:3000/recover-password'
    const spy = vi.spyOn(axios, 'post')
    await userEvent.click(submitBtn)
    axios.post(url, email)
    expect(spy).toHaveBeenCalledWith(url, email)
  })
})
