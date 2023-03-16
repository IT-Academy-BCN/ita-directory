import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Menu from '../../components/molecules/Menu'

// vi.mock('react-router-dom', () => ({
//   useLocation: vi.fn(() => ({ pathname: '/' })),
//   Link: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
// }))

describe('Menu', () => {
  //   it('renders correctly', () => {
  //     render(<Menu data-testid="menu" />)

  //     expect(screen.getByText(/El directorio/)).toBeInTheDocument()
  //     expect(screen.getByText(/Para alumnos/)).toBeInTheDocument()
  //     expect(screen.getByText(/Para empresas/)).toBeInTheDocument()
  //     expect(screen.getByText(/Anuncios/)).toBeInTheDocument()
  //   })

  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Menu data-testid="menu" />
      </MemoryRouter>
    )

    expect(screen.getByText(/El directorio/)).toBeInTheDocument()
    expect(screen.getByText(/Para alumnos/)).toBeInTheDocument()
    expect(screen.getByText(/Para empresas/)).toBeInTheDocument()
    expect(screen.getByText(/Anuncios/)).toBeInTheDocument()
    console.log('container', container.innerHTML)
  })
})
