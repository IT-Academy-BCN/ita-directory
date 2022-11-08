import { expect, it, vi } from 'vitest'
import Body from '../../components/layout/Body/Body'
import { render, screen } from '../test-utils'

const mockUser = {
  userRole: { name: 'Registered' },
}
vi.mock('../../hooks/useUserHook', () => ({
  default: () => mockUser,
}))

describe('Body', () => {
  it("render 'text' when user doesn't have access", () => {
    const userRoleProperty = {
      userRole: 'Admin',
    }

    render(<Body {...userRoleProperty} />)

    const text = screen.getByText("You don't have persmissions to see this content.")
    expect(text).toBeInTheDocument()
  })

  it('render the content of the page when user has access', () => {
    const userRoleProperty = {
      userRole: 'Registered',
    }
    render(<Body title="Usuarios registrados" {...userRoleProperty} />)

    const text = screen.getByText('Usuarios registrados')
    expect(text).toBeInTheDocument()
  })
})
