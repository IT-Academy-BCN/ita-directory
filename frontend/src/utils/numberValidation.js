import { z } from 'zod'

const numberValidation = (val, ctx) => {
  const parsed = parseInt(val, 10)
  if (parsed < 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Must be a positive number',
    })
    return z.NEVER
  }
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Must insert a number',
    })
    return z.NEVER
  }
  if (val % 1 !== 0) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'No decimals allowed',
    })
    return z.NEVER
  }
  return parsed
}

export default numberValidation
