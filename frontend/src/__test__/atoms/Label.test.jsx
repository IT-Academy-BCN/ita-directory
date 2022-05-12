/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable jest/valid-describe-callback */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Label from '../../components/atoms/Forms/Label'

describe('Label', async () => {
  it('should render the label', () => {
    render(<Label label="test label" htmlFor="email" />)
    const label = screen.getByText('test label')

    expect(label).toBeInTheDocument()
    expect(label.outerHTML.includes('for="email"')).toBeTruthy()
    expect(label.outerHTML.includes('hidden')).toBeFalsy()

    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector('label')).toBeInTheDocument()
  })

  it('should render the label with hidden prop', () => {
    render(<Label label="test label" htmlFor="email" hiddenLabel />)
    const label = screen.getByText('test label')
    expect(label.outerHTML.includes('hidden')).toBeTruthy()
  })
})
