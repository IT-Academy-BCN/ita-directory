import { describe, it, expect } from 'vitest'
import checkRole from '../../utils/checkRole'

describe('CheckRole', () => {
  it('should render true if userRole property is not passed', () => {
    const result = checkRole()
    expect(result).toBe(true)
  })

  it("should render true if the user's role score is greater than the userRole property", () => {
    const result = checkRole(100, 0)
    expect(result).toBe(true)
  })

  it("should render false if the user's role score is less than the userRole property", () => {
    const result = checkRole(0, 100)
    expect(result).toBe(false)
  })
})
