const prisma = require('../../prisma/indexPrisma')

const checkRole =
  (...permittedRoles) =>
  async (req, res, next) => {
    const { userId } = req

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId, 10) },
      include: { userRole: true },
    })

    let permitted = false
    permittedRoles.forEach((key) => {
      permitted = permitted || user.userRole.name === key
    })

    if (userId && permitted) {
      next()
    } else {
      res.status(403).json({ message: 'Permission denied' })
    }
  }

module.exports = checkRole
