import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Dropdown } from '../../components/atoms'

describe('Dropdown', () => {
  const setDropdownVisible = vi.fn()

  it('render', () => {
    render(<Dropdown setDropdownVisible={setDropdownVisible}>Editar Perfil</Dropdown>)
    expect(screen.getByText('Editar Perfil')).toBeInTheDocument()
  })
})
