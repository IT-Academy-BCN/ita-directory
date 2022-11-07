// import { RolePoints } from './constant'

const RolePoints = {
  ADMIN: 100,
  MANAGER: 50,
  DEVELOPER: 20,
  GUEST: 0,
}
// when backend adds userRoleName property to users, change constants for import constants

const checkRole = (user, userRole) => {
  if (!userRole) return true

  if (RolePoints[user.userRoleId] >= RolePoints[userRole]) return true

  return false
}

export default checkRole
