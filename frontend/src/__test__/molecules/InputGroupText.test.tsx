import React from 'react'
import { render, screen } from '@testing-library/react'
import InputGroupText from '../../components/molecules/InputGroupText'

describe('InputGroupText', () => {
  it('renders an input element', () => {
    render(<InputGroupText label="label" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render a label element', () => {
    render(<InputGroupText label="test" />)
    expect(screen.getByText('test').tagName).toBe('LABEL')
  })

  it('renders the placeholder', () => {
    render(<InputGroupText label="label" placeholder="test" />)
    expect(screen.getByPlaceholderText('test')).toBeInTheDocument()
  })

  it('displays the error message correctly', () => {
    render(<InputGroupText label="test" error="This is an error message" />)
    expect(screen.getByText('This is an error message')).toBeInTheDocument()
  })
})
