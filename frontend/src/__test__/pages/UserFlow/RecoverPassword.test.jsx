import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RecoverPassword } from '../../../pages'
import store from '../../../store/store'

vi.mock('axios')

vi.mock('../../../utils/axiosInstance', () => ({
  create: vi.fn(() => ({
    baseURL: 'adios',
  })),
}))

vi.mock('../../../api/utils/patchUser', () => ({
  create: vi.fn(() => ({
    baseURL: 'adios',
  })),
}))

describe('<RecoverPassword>', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

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
    await userEvent.click(submitBtn)
    expect(axios.post).toHaveBeenCalledWith(url, email)
  })
})
