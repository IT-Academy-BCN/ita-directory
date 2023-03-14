import React from 'react'
import { render, screen } from '@testing-library/react'
import InputGroupText from '../../components/molecules/InputGroupText'

describe('InputGroupText', () => {
  it('renders', () => {
    render(<InputGroupText label="test" id="id" />)
    const inputGroupText = screen.getByText('test')

    expect(inputGroupText).toBeInTheDocument()
    expect(inputGroupText).toHaveAttribute('for', 'id')
  })
})
