import { rest } from 'msw'
import { urls } from '../utils'

const baseURL = `${import.meta.env.VITE_API_URL}${urls.register}`

const mockRegisterRes = [
  {
    message: 'User registered correctly',
  },
]

const handlers = [
  rest.post(baseURL, (req, res, ctx) => res(ctx.status(200), ctx.json(mockRegisterRes))),
]

export default handlers
