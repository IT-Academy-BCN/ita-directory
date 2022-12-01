import { rest } from 'msw'

const baseURL = `http://localhost:10910/api/v1/register`

const mockRegisterRes = [
  {
    message: 'User registered correctly',
  },
]

const handlers = [
  rest.post(baseURL, (req, res, ctx) => res(ctx.status(200), ctx.json(mockRegisterRes))),
]

export default handlers
