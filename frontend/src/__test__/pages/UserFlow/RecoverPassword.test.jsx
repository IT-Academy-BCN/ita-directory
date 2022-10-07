import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../test-utils'
import { RecoverPassword } from '../../../pages'

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
    render(<RecoverPassword />)
    const input = screen.getByPlaceholderText(/email/i)
    expect(input).toBeInTheDocument()
  })

  it('pass valid email to test email input field', async () => {
    render(<RecoverPassword />)

    const input = screen.getByPlaceholderText(/email/i)
    const emailFormat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    await userEvent.type(input, 'test@test.com')
    expect(input.value).toMatch(emailFormat)
  })

  it.skip('should submit form', async () => {
    render(<RecoverPassword />)
    const submitBtn = screen.getByRole('button', { name: /enviar/i })
    const email = { email: 'test@test.test' }
    const url = 'http://localhost:3000/recover-password'
    await userEvent.click(submitBtn)
    expect(axios.post).toHaveBeenCalledWith(url, email)
  })
})
