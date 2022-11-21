import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../../test-utils'
import Registration from '../../../../pages/UserFlow/Registration/Registration'

describe('Registration', () => {
  it('should render the Resgistration', () => {
    render(<Registration />)
    const registerBtn = screen.getByText(/registrarme/i)
    expect(registerBtn).toBeInTheDocument()
  })

  it('should call onSubmit when all fields pass validation', async () => {
    const handleSubmit = vi.fn()
    render(<Registration handleSubmit={handleSubmit} />)

    const firstName = screen.getByPlaceholderText(/nombre/i)
    await userEvent.type(firstName, 'Sergi')

    const lastName = screen.getByPlaceholderText(/apellido/i)
    await userEvent.type(lastName, 'Bosch')

    const email = screen.getByPlaceholderText(/email/i)
    await userEvent.type(email, 'email@email.com')

    const password = screen.getByPlaceholderText(/contraseña/i)
    await userEvent.type(password, 'Hola12!')

    const privacyCheck = screen.getByRole('checkbox')
    await userEvent.click(privacyCheck)

    await userEvent.click(screen.getByRole('button', { name: /Registrarme/i }))

    waitFor(() =>
      expect(screen.getByText(/your account has been successfully created!/i)).toBeInTheDocument()
    )
  })
})
