import { rest } from 'msw'
import { urls } from '../utils'

const baseURL = `${import.meta.env.VITE_API_URL}${urls.register}`

// response from Register (preview)
const mockRegisterRes = [
  {
    message: 'User registered correctly',
  },
]

// requested handlers
const handlers = [
  // post request     request, response, context
  rest.post(baseURL, (req, res, ctx) => res(ctx.status(200), ctx.json(mockRegisterRes))),
]

export default handlers
