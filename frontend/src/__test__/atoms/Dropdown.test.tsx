import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { Dropdown } from '../../components/atoms'
import userEvent from '@testing-library/user-event'

describe('Dropdown', () => {
  it('render', async () => {
    const setDropdownVisible = vi.fn()

    render(
      <div>
        <button data-testid="testing">Testing</button>
        <Dropdown setDropdownVisible={setDropdownVisible}>Editar Perfil</Dropdown>
      </div>
    )

    expect(screen.getByText('Editar Perfil')).toBeInTheDocument()

    const button = screen.getByTestId('testing')
    userEvent.click(button)
    await waitFor(() => expect(setDropdownVisible).toHaveBeenCalled())
  })
})
