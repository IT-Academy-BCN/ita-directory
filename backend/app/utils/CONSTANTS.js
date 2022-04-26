// Internal modules
const prisma = require('./../../prisma/indexPrisma')

let CONSTANTS

async function loadConstants() {
  try {
    const user_role = await prisma.user_role.findMany()
    const user_status = await prisma.user_status.findMany()
    // console.log(user_role, user_status);
    CONSTANTS = { user_role, user_status }
  } catch (err) {
    console.error(err)
  }
}

function setConstants() {
  loadConstants()
}

function getConstants() {
  return CONSTANTS
}

const type_sw = (type) => {
  let type_id = ''
  switch (type) {
    case 'house':
      return (type_id = 1)
      break
    case 'room':
      return (type_id = 2)
      break
    case 'garage':
      return (type_id = 3)
      break
    case 'storage':
      return (type_id = 4)
      break
    case 'office':
      return (type_id = 5)
      break
    case 'warehouse':
      return (type_id = 6)
      break
    case 'building':
      return (type_id = 7)
      break
    case 'new_building':
      return (type_id = 8)
      break
    default:
      type_id = 0
  }
}

module.exports = {
  loadConstants,
  getConstants,
  setConstants,
  type_sw,
  CONSTANTS,
}
