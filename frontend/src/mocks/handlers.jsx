/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw'
import { urls } from '../utils'

const baseURL = `${import.meta.env.VITE_API_URL}${urls.register}`
const mockRegisterRes = [
  {
    status: '200',
    message: 'User registered correctly',
  },
]
const handlers = [
  // eslint-disable-next-line arrow-body-style
  rest.post(baseURL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRegisterRes))
  }),
]

export default handlers
