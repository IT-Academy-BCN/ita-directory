import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import newAdSchema from '../../validation/createNewAdSchema'

// Porque utilizando este modo test
const testSchema = newAdSchema.pick({ price: true })

describe.only('numberValidation', () => {
  it('Should be successful if positive number without decimals', () => {
    const r = testSchema.safeParse({ price: '5' })
    expect(r.success).toBe(true)
  })

  it('Should demand a positive number if given a negative number', () => {
    const r = testSchema.safeParse({ price: '-5' })
    expect(r.success).toBe(false)
    expect(r.error.issues[0].message).toBe('Must be a positive number')
  })

  it('Should demand a number if given letters', () => {
    const r = testSchema.safeParse({ price: 'Five' })
    expect(r.success).toBe(false)
    expect(r.error.issues[0].message).toBe('Must insert a number')
  })

  it('Should demand a whole number if given a number with decimals', () => {
    const r = testSchema.safeParse({ price: '5.12' })
    expect(r.success).toBe(false)
    expect(r.error.issues[0].message).toBe('No decimals allowed')
  })
})
