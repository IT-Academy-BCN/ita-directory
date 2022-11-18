import { Request, Response } from 'express'
import { apiResponse } from '../utils/utils'
import { getConstants, loadConstants } from '../utils/CONSTANTS'

async function getConstantsRoute(req: Request, res: Response) {
  if (getConstants() === undefined) {
    await loadConstants()
  }
  res.status(200).json(
    apiResponse({
      status: 200,
      message: 'Constants fetched correctly.',
      data: getConstants(),
    })
  )
}

export default getConstantsRoute
