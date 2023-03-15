import React from 'react'
import { render, screen } from '@testing-library/react'
import InputGroupText from '../../components/molecules/InputGroupText'

describe('InputGroupText', () => {
  it('renders correctly', () => {
    render(<InputGroupText label="label" id="testid" name="testname" placeholder="text input" />)

    const label = screen.getByText('label')
    const input = screen.getByPlaceholderText('text input')

    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(label).toHaveAttribute('for', 'testid')
    expect(input).toHaveAttribute('id', 'testid')
    expect(input).toHaveAttribute('name', 'testname')
  })

  it('renders the error message', () => {
    render(<InputGroupText label="label" error="error message" id="testid" name="testid" />)
    expect(screen.getByText('error message')).toBeInTheDocument()
  })

  it('displays the error message correctly', () => {
    render(<InputGroupText label="test" id="testid" name="testid" icon="user" />)
    expect(screen.getByText('user')).toBeInTheDocument()
  })
})
