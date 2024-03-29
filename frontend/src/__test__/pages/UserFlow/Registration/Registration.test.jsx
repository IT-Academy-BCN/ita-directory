import React from 'react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../../test-utils'
import Registration from '../../../../pages/UserFlow/Registration/Registration'

describe('Registration', () => {
  it('should render the Resgistration form', () => {
    render(<Registration />)
    const registerBtn = screen.getByText(/registrarme/i)
    expect(registerBtn).toBeInTheDocument()
  })

  it('should render the success notification when valid inputs are provided', async () => {
    render(<Registration />)

    const firstName = screen.getByPlaceholderText(/nombre/i)

    await userEvent.type(firstName, 'Sergi')

    const lastName = screen.getByPlaceholderText(/apellido/i)
    await userEvent.type(lastName, 'Bosch')

    const email = screen.getByPlaceholderText(/email/i)
    await userEvent.type(email, 'email@email.com')

    const password = screen.getByLabelText(/password/i)
    await userEvent.type(password, 'Hola12!')

    const privacyCheck = screen.getByRole('checkbox')
    await userEvent.click(privacyCheck)

    await userEvent.click(screen.getByText('Registrarme'))

    await waitFor(() => {
      expect(screen.getByText('check_circle')).toBeInTheDocument()
    })
  }, 10_000)

  it('pass invalid email to test input value', async () => {
    render(<Registration />)

    const email = screen.getByPlaceholderText(/email/i)
    userEvent.type(email, 'email@email')

    const buttonSubmit = screen.getByRole('button', {
      name: /registrarme/i,
    })

    userEvent.click(buttonSubmit)

    await waitFor(() => {
      expect(screen.getByText(/must be a valid email/i)).toBeInTheDocument()
    })
  })
})
