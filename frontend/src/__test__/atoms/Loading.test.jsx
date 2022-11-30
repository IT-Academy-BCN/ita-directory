// @ts-nocheck
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Loading } from '../../components/atoms'

describe('Loading', () => {
  beforeEach(cleanup)

  it('shoud render a loading', () => {
    render(<Loading />)
    const loading = screen.getByTestId('loading')
    expect(loading).toBeEmptyDOMElement()
  })

  it('shoud pass props', () => {
    render(<Loading size={80} />)
    const loading = screen.getByTestId('loading')
    expect(loading).toHaveAttribute('size', '80')
  })

  it('shoud pass prop and render a style with that prop', () => {
    render(<Loading size={111} />)
    const loading = screen.getByTestId('loading')
    const styles = getComputedStyle(loading)
    expect(styles.getPropertyValue('--width-height')).toBe('111px')
  })
})
