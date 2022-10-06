/* eslint-disable jest/valid-expect-in-promise */
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

import fs from 'node:fs/promises'

const filePathname = `${__dirname.split('__')[0]}index.jsx`

const expression = /import '.\/modern-normalize.css'/gi

const readFile = new Promise((resolve) => {
  fs.readFile(filePathname, 'utf-8', (err, data) => {
    const datarow = data.split(/\r?\n/)
    datarow.forEach((line) => {
      if (line) {
        if (line.match(expression) && line.length <= 31) {
          resolve(true)
        }
      }
    })
  })
})

describe('testing normalize: read index.jsx and find out if imported css appears', () => {
  it('should be true if css import is found out', () => {
    readFile.then((data) => expect(data).toBe(true))
  })
})
