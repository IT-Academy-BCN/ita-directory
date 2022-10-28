const allMonths = {
  0: { name: 'Enero', shortName: 'Ene' },
  1: { name: 'Febrero', shortName: 'Feb' },
  2: { name: 'Marzo', shortName: 'Mar' },
  3: { name: 'Abril', shortName: 'Abr' },
  4: { name: 'Mayo', shortName: 'May' },
  5: { name: 'Junio', shortName: 'Jun' },
  6: { name: 'Julio', shortName: 'Jul' },
  7: { name: 'Agosto', shortName: 'Ago' },
  8: { name: 'Septiembre', shortName: 'Sep' },
  9: { name: 'Octubre', shortName: 'Oct' },
  10: { name: 'Noviembre', shortName: 'Nov' },
  11: { name: 'Diciembre', shortName: 'Dec' },
}

const ReqStatus = {
  INITIAL: 'INITIAL',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

const Roles = {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  DEVELOPER: 'DEVELOPER',
  GUEST: 'GUEST',
}

// when backend adds userRoleName property to users, change "1" for "ADMIN"

const RolePoints = {
  1: 100,
  MANAGER: 50,
  DEVELOPER: 20,
  GUEST: 0,
}
export { allMonths, ReqStatus, Roles, RolePoints }
