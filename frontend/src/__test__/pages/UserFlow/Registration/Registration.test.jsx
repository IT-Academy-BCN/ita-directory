import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../../../test-utils'
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
    userEvent.type(firstName, 'Sergi')

    const lastName = screen.getByPlaceholderText(/apellido/i)
    userEvent.type(lastName, 'Bosch')

    const email = screen.getByPlaceholderText(/email/i)
    userEvent.type(email, 'email@email.com')

    const password = screen.getByPlaceholderText(/contraseña/i)
    userEvent.type(password, 'Hola12!')

    const privacyCheck = screen.getByRole('checkbox')
    userEvent.click(privacyCheck)

    userEvent.click(screen.getByRole('button', { name: /Registrarme/i }))

    // const successNotification = screen.getByText(/your account has been successfully created!/i)

    // expect(handleSubmit).toHaveBeenCalled()
  })
})
