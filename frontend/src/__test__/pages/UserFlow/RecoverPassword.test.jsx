import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import configureStore from 'redux-mock-store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RecoverPassword } from '../../../pages'

vi.mock('axios')

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
    // given
    const submitBtn = screen.getByRole('button', { name: /enviar/i })
    const email = { email: 'test@test.test' }
    axios.post.mockResolvedValueOnce(email)
    // when
    await userEvent.click(submitBtn)
    // then
    expect(axios.post).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/recover-password`,
      email
    )
  })
})
