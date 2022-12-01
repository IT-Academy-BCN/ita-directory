import { rest } from 'msw'

const baseURL = `http://localhost:10910/api/v1/register`

const handlers = [
  rest.post(baseURL, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        message: 'User registered correctly',
      })
    )
  ),
]

export default handlers
