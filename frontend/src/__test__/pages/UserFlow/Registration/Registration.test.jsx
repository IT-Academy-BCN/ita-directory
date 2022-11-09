import React from 'react'
import { describe, it, expect } from 'vitest'
import user from '@testing-library/user-event'
import { render, screen, waitFor } from '../../../test-utils'
import Registration from '../../../../pages/UserFlow/Registration/Registration'

describe('Registration', () => {
  it('should render the Resgistration', () => {
    render(<Registration />)
    const registerBtn = screen.getByText(/registrarme/i)
    expect(registerBtn).toBeInTheDocument()
  })

  it('should call onSubmit when all fields pass validation', async () => {
    render(<Registration />)

    const firstName = screen.getByPlaceholderText(/nombre/i)
    user.type(firstName, 'Sergi')

    const lastName = screen.getByPlaceholderText(/apellido/i)
    user.type(lastName, 'Bosch')

    const email = screen.getByPlaceholderText(/email/i)
    user.type(email, 'email@email.com')

    const password = screen.getByPlaceholderText(/contraseña/i)
    user.type(password, 'Hola12!')

    const privacyCheck = screen.getByRole('checkbox')
    user.click(privacyCheck)

    user.click(screen.getByRole('button', { name: /Registrarme/i }))

    const successNotification = screen.getByText(/your account has been successfully created!/i)

    await waitFor(() => {
      expect(successNotification).toBeInTheDocument()
    })
  })
})
