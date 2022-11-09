import { expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '../../test-utils'
import App from '../../../App'

describe('Body', () => {
  it("should render PageNotFound if the path doesn't exist", () => {
    const badRoute = '/some/bad/route'
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )
    expect(
      screen.getByText(/Ops, parece que la página que estás buscando no existe./i)
    ).toBeInTheDocument()
  })
})
