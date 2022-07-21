// Internal modules
const prisma = require('../../prisma/indexPrisma')

let CONSTANTS

async function loadConstants() {
  try {
    const userRole = await prisma.user_role.findMany()
    const userStatus = await prisma.user_status.findMany()
    // console.log(user_role, user_status);
    CONSTANTS = { userRole, userStatus }
  } catch (err) {
    // console.error(err)
  }
}

function setConstants() {
  loadConstants()
}

function getConstants() {
  return CONSTANTS
}

const typeSw = (type) => {
  switch (type) {
    case 'house':
      return 1
    case 'room':
      return 2
    case 'garage':
      return 3
    case 'storage':
      return 4
    case 'office':
      return 5
    case 'warehouse':
      return 6
    case 'building':
      return 7
    case 'new_building':
      return 8
    default:
      return 0
  }
}

const roleValues = {
  Admin: 'Admin',
  Manager: 'Manager',
  Registered: 'Registered',
  Developer: 'Developer',
}

module.exports = {
  loadConstants,
  getConstants,
  setConstants,
  typeSw,
  CONSTANTS,
  roleValues,
}
