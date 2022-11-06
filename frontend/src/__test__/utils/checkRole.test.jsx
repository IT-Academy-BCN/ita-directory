import { describe, it, expect } from 'vitest'
import checkRole from '../../utils/checkRole'
import { Roles } from '../../utils/constant'

const userAdmin = {
  userRoleId: 'ADMIN',
}
const userManager = {
  userRoleId: 'MANAGER',
}
const userDeveloper = {
  userRoleId: 'DEVELOPER',
}
const userGuest = {
  userRoleId: 'GUEST',
}

describe('CheckRole', () => {
  it('should render true if userRole property is not passed', () => {
    const result = checkRole(userAdmin, null)
    expect(result).toBe(true)
  })

  it.each([
    [userAdmin, Roles.ADMIN, true],
    [userAdmin, Roles.MANAGER, true],
    [userAdmin, Roles.DEVELOPER, true],
    [userAdmin, Roles.GUEST, true],
    [userManager, Roles.ADMIN, false],
    [userManager, Roles.MANAGER, true],
    [userManager, Roles.DEVELOPER, true],
    [userManager, Roles.GUEST, true],
    [userDeveloper, Roles.ADMIN, false],
    [userDeveloper, Roles.MANAGER, false],
    [userDeveloper, Roles.DEVELOPER, true],
    [userDeveloper, Roles.GUEST, true],
    [userGuest, Roles.ADMIN, false],
    [userGuest, Roles.MANAGER, false],
    [userGuest, Roles.DEVELOPER, false],
    [userGuest, Roles.GUEST, true],
  ])('checkRole(user, userRole) -> true/false', (a, b, expected) => {
    expect(checkRole(a, b)).toBe(expected)
  })
})
