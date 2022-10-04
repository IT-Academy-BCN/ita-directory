/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-describe-callback */
import '@testing-library/jest-dom'
import { render, screen} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import InputGroup from '../../components/molecules/InputGroup'

describe('InputGroup', async () => {
  it('should render the InputGroup', () => {
    render(
      <InputGroup
        label="Email"
        hiddenLabel
        type="email"
        placeholder="Introduce tu email"
        id="emailName"
        name="email"
        className="w-full"
        error="error text"
        register="email"
      />
    )
    const inputGroup = screen.getByLabelText('Email')

    expect(inputGroup).toBeInTheDocument()
  })
})
