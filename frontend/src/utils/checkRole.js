import { RolePoints } from './constant'

const checkRole = (user, userRole) => {
  if (!userRole) return true

  if (user && RolePoints[user.userRole.name] >= RolePoints[userRole]) return true

  return false
}

export default checkRole
