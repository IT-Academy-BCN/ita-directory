import React from 'react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '../../../test-utils'
import Registration from '../../../../pages/UserFlow/Registration/Registration'
import server from '../../../../mocks/server'

describe('Registration', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers)
  afterAll(() => server.close)

  it('should render the Resgistration form', () => {
    render(<Registration />)
    const registerBtn = screen.getByText(/registrarme/i)
    expect(registerBtn).toBeInTheDocument()
  })

  it.only('should call onSubmit when all fields pass validation', async () => {
    render(<Registration />)

    const firstName = screen.getByPlaceholderText(/nombre/i)
    userEvent.type(firstName, 'Sergi')

    const lastName = screen.getByPlaceholderText(/apellido/i)
    userEvent.type(lastName, 'Bosch')

    const email = screen.getByPlaceholderText(/email/i)
    userEvent.type(email, 'email@email.com')

    const password = screen.getByLabelText(/password/i)
    userEvent.type(password, 'Hola12!')

    const privacyCheck = screen.getByRole('checkbox')
    userEvent.click(privacyCheck)

    const buttonSubmit = screen.getByRole('button', {
      name: /registrarme/i,
    })

    userEvent.click(buttonSubmit)

    await waitFor(() => screen.queryByText(/your account has been successfully created!/i))
    await waitFor(() => screen.queryByText('User registered correctly'))
  })

  // it('should render a success notification', async () => {
  //   render(<Registration />)

  //   const firstName = screen.getByPlaceholderText(/nombre/i)
  //   userEvent.type(firstName, 'Sergi')

  //   const lastName = screen.getByPlaceholderText(/apellido/i)
  //   userEvent.type(lastName, 'Bosch')

  //   const email = screen.getByPlaceholderText(/email/i)
  //   userEvent.type(email, 'email@email.com')

  //   const password = screen.getByPlaceholderText(/contraseña/i)
  //   userEvent.type(password, 'Hola12!')

  //   const privacyCheck = screen.getByRole('checkbox')
  //   userEvent.click(privacyCheck)

  //   userEvent.click(screen.getByRole('button', { name: /Registrarme/i }))

  //   // await Promise.all([
  //   //   waitFor(() =>
  //   //     expect(screen.getByText(/your account has been successfully created!/i)).toBeInTheDocument()
  //   //   ),
  //   // ])
  //   await waitFor(() =>
  //     expect(screen.getByText(/your account has been successfully created!/i)).toBeInTheDocument()
  //   )
  // })
})
