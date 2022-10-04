/* eslint-disable no-console */
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

// const events = require('events')
import events from 'node:events'
// const fs = require('fs')
import fs from 'node:fs'
// const readline = require('readline')
import readline from 'node:readline'

// todo: lectura del archivo con node
// C:\Workspace\IT ACADEMY\Projecte IT\ita-directory\frontend\src\index.jsx

// const filePath = 'C:\\Workspace\\IT ACADEMY\\Projecte IT\\ita-directory\\frontend\\src\\index.jsx'
const filePath = `${__dirname.split('__')[0]}index.jsx`

console.log('filePath -->', filePath)

let lineImportNomalizeCss = 0

try {
  let lineNumber = 0
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity,
  })

  rl.on('line', (line) => {
    lineNumber += 1
    console.log(`Line from file ${lineNumber}: ${line}`)
    if (lineNumber === 6) lineImportNomalizeCss = line
  })

  await events.once(rl, 'close')

  console.log('Reading file line by line with readline done.')
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
} catch (err) {
  console.error(err)
}

console.log('directorio', __filename)

// test

describe('testing normalize', () => {
  it('log', async () => {
    expect(lineImportNomalizeCss).toBe(`import './modern-normalize.css'`)
  })
})
