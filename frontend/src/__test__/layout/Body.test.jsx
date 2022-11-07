import { expect, it, vi } from 'vitest'
import Body from '../../components/layout/Body/Body'
import { render, screen } from '../test-utils'

const mockUser = {
  userRoleId: 'GUEST',
}

vi.mock('../../hooks/useUserHook', () => ({
  default: () => mockUser,
}))

describe('Body', () => {
  it("render 'text' when user doesn't have access", () => {
    const userRoleProperty = {
      userRole: 'ADMIN',
    }

    render(<Body {...userRoleProperty} />)

    const text = screen.getByText("You don't have persmissions to see this content.")
    expect(text).toBeInTheDocument()
  })

  it('render the content of the page when user has access', () => {
    const userRoleProperty = {
      userRole: 'GUEST',
    }
    render(<Body title="Usuarios registrados" {...userRoleProperty} />)

    const text = screen.getByText('Usuarios registrados')
    expect(text).toBeInTheDocument()
  })
})
