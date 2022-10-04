/* eslint-disable no-console */
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

import events from 'node:events'
import fs from 'node:fs'
import readline from 'node:readline'

// todo: lectura del archivo con node
// C:\Workspace\IT ACADEMY\Projecte IT\ita-directory\frontend\src\index.jsx

// const filePath = 'C:\\Workspace\\IT ACADEMY\\Projecte IT\\ita-directory\\frontend\\src\\index.jsx'
const filePathname = `${__dirname.split('__')[0]}index.jsx`

const readFile = async (filePath) => {
  console.log('filePath -->', filePath)
  let checkedout = false

  try {
    let lineNumber = 0
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
    })

    rl.on('line', async (line) => {
      lineNumber += 1
      console.log(`Line from file ${lineNumber}: ${line}`)

      if (line === `import './modern-normalize.css'`) {
        checkedout = true
      }
    })

    await events.once(rl, 'close')
  } catch (err) {
    console.error(err)
    return false
  }
  return checkedout
}
// test

describe('testing normalize', () => {
  it('should be true if css found out', async () => {
    expect(await readFile(filePathname)).toBe(true)
  })
})
