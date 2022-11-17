import axios from 'axios'
import urls from './urls'

const baseURL = import.meta.env.VITE_API_URL
let authToken = localStorage.getItem('token')
let refreshToken = localStorage.getItem('refreshToken')

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authToken}` },
})

axiosInstance.interceptors.request.use(
  async (req) => {
    authToken = localStorage.getItem('token')
    refreshToken = localStorage.getItem('refreshToken')
    req.headers.Authorization = `Bearer ${authToken}`
    return req
  },
  async (error) => error
  // Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    refreshToken = localStorage.getItem('refreshToken')
    if (error?.response?.status === 401) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true
      return axios
        .get(urls.refreshToken, {
          headers: { refresh: refreshToken },
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem('token', response.data.data.accessToken)
            originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`
            return axios(originalRequest)
          }
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          return null
        })
        .catch((e) => {
          localStorage.removeItem('token')
          localStorage.removeItem('refreshToken')
          return null
        })
    }
    return error
  }
)

export default axiosInstance
