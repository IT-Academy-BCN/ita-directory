import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL

const patchUser = (user) => {
  return fetch(`${import.meta.env.VITE_API_URL}/users`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: user.name,
      lastnames: user.lastnames,
      email: user.email,
      user_status_id: user.user_status_id,
      user_role_id: user.user_role_id,
      id: user.id,
    }),
  })
}

export default patchUser
