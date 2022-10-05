/* eslint-disable no-console */
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

import readline from 'node:readline'

import events from 'node:events'
import fs from 'node:fs'

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

describe('testing normalize: read index.jsx and find out if imported css appears', () => {
  it('should be true if css found out', async () => {
    expect(await readFile(filePathname)).toBe(true)
  })
})

// Comento este trozo para seguir investigando cómo se puede comprobar si se ha cargado
// correctamente el css mirando en los estilos la propiedad característica del css principal
// computados en un div del dom
// describe('testing by ckecking a style property', () => {
//   it('should have box-sizing', () => {
//     render(<App />)
//     const container = screen.getByRole('container')
//     const styleComputed = window.getComputedStyle(container)
//     console.log('styleComputed', styleComputed)
//     expect(styleComputed.boxSizing).toBe('border-box')
//   })
// })