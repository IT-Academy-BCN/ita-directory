import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '../../components/atoms'
import { boxShadow, colors, dimensions } from '../../theme'

describe('Card', () => {
  it('renders with correct styles', () => {
    render(<Card data-testid="card" />)
    expect(screen.getByTestId('card')).toBeInTheDocument()

    expect(screen.getByTestId('card')).toHaveStyle('background: white')
    expect(screen.getByTestId('card')).toHaveStyle(`box-shadow: ${boxShadow.base}`)
    expect(screen.getByTestId('card')).toHaveStyle(`border: 1px solid ${colors.extraLightGrey}`)
    expect(screen.getByTestId('card')).toHaveStyle(`border-radius: ${dimensions.borderRadius.base}`)
    expect(screen.getByTestId('card')).toHaveStyle(`padding: ${dimensions.spacing.base}`)
  })
})
