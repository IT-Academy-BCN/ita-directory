import { render, screen } from '@testing-library/react'
import { Title } from '../../components/atoms'
import { colors, font } from '../../theme'

describe('Title', () => {
  it('renders correctly', () => {
    render(<Title text="Testing Title" order={1} />)

    const title = screen.getByText('Testing Title')

    expect(title).toBeInTheDocument()
  })

  it('renders with differents orders', () => {
    render(<Title text="order 3" order={3} />)
    render(<Title text="order 6" order={6} />)
  })

  it('renders with different styles values', () => {
    render(<Title text="Styles" order={1} />)

    const title = screen.getByText('Styles')

    expect(title).toHaveStyle(`
      font-size: ${font.base};
      color: ${colors.darkGrey};
    `)
  })
})
