import { describe, it, expect } from 'vitest'
import checkRole from '../../utils/checkRole'
import { Role } from '../../utils/constant'

const userAdmin = {
  userRole: { name: 'Admin' },
}
const userManager = {
  userRole: { name: 'Manager' },
}
const userDeveloper = {
  userRole: { name: 'Developer' },
}
const userRegistered = {
  userRole: { name: 'Registered' },
}

describe('CheckRole', () => {
  it('should render true if userRole property is not passed', () => {
    const result = checkRole(userAdmin, null)
    expect(result).toBe(true)
  })

  it.each([
    [userAdmin, Role.Admin, true],
    [userAdmin, Role.Manager, true],
    [userAdmin, Role.Developer, true],
    [userAdmin, Role.Registered, true],
    [userManager, Role.Admin, false],
    [userManager, Role.Manager, true],
    [userManager, Role.Developer, true],
    [userManager, Role.Registered, true],
    [userDeveloper, Role.Admin, false],
    [userDeveloper, Role.Manager, false],
    [userDeveloper, Role.Developer, true],
    [userDeveloper, Role.Registered, true],
    [userRegistered, Role.Admin, false],
    [userRegistered, Role.Manager, false],
    [userRegistered, Role.Developer, false],
    [userRegistered, Role.Registered, true],
  ])('checkRole(user, userRole) -> true/false', (a, b, expected) => {
    expect(checkRole(a, b)).toBe(expected)
  })
})
