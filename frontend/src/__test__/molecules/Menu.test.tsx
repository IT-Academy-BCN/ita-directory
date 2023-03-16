import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Menu from '../../components/molecules/Menu'

describe('Menu', () => {
  it('renders useLocation', () => {
    const route = '/'
    function LocationDisplay() {
      const location = useLocation()
      return <div data-testid="location-display">{location.pathname}</div>
    }

    render(
      <MemoryRouter initialEntries={[route]}>
        <LocationDisplay />
      </MemoryRouter>
    )
    expect(screen.getByTestId('location-display')).toHaveTextContent(route)
  })

  it('renders correctly', async () => {
    render(<Menu data-testid="menu" />)

    const user = userEvent.setup()

    expect(screen.getByText('/home/i')).toBeInTheDocument()

    await user.click(screen.getByText('/about/i'))
    expect(screen.getByText('/you are on the about page/i')).toBeInTheDocument()
  })
})
