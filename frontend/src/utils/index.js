import paths from './paths'

const refresh = () => {
  window.location.reload()
}

const redirectHome = () => {
  document.location.href = '/'
}

const logout = () => {
  localStorage.removeItem('itacademy')
  refresh()
}

export { refresh, redirectHome, logout, paths }
