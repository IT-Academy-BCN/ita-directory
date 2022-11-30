// @ts-nocheck
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Loading } from '../../components/atoms'

describe('Loading', () => {
  afterEach(cleanup)

  it('shoud render a loading', () => {
    render(<Loading />)
    const loading = screen.getByTestId('loading')
    expect(loading).toBeEmptyDOMElement()
  })

  it.only('shoud pass props', () => {
    render(<Loading size={80} />)
    const loading = screen.getByTestId('loading')
    expect(loading).toHaveAttribute('size', '80')
  })

  it('shoud have width props in the style', () => {
    render(<Loading size={80} />)
    const loading = screen.getByTestId('loading')
    expect(loading).toHaveStyleRule('width', '80px;')
  })
})
