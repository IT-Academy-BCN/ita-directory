import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import fs from 'node:fs'

const filePathname = `${__dirname.split('__')[0]}index.jsx`
const expression = /import '.\/modern-normalize\/modern-normalize.css'/gi

describe('testing normalize: read index.jsx and find out if imported css appears', () => {
  it('should be true if css import is found out', () => {
    const data = fs.readFileSync(filePathname, { encoding: 'utf8', flag: 'r' })
    expect(expression.test(data)).toBe(true)
  })
})
