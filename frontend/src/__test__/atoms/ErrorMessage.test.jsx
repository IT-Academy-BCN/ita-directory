/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-describe-callback */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ErrorMessage from '../../components/atoms/Forms/ErrorMessage'

describe('ErrorMessage', () => {
  it('should render the given ErrorMessage', () => {
    render(<ErrorMessage text="some error" />)
    const errorMessage = screen.getByText('some error')

    expect(errorMessage).toBeInTheDocument()
  })

  it('error text should should be Red', () => {
    render(<ErrorMessage text="some error" />)
    const errorMessage = screen.getByText('some error')

    expect(errorMessage).toHaveStyle('color:#DC2626')
  })
})
