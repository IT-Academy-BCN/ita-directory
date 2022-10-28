import { RolePoints } from './constant'

const checkRole = (user, userRole) => {
  if (!userRole) return true
  if (user && RolePoints[user.userRoleId] >= RolePoints[userRole]) return true

  return false
}

export default checkRole
