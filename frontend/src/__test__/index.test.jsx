import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

import readline from 'node:readline'

import events from 'node:events'
import { createReadStream, readFile as readIt } from 'node:fs'

const filePathname = `${__dirname.split('__')[0]}index.jsx`

const readFile = async (filePath) => {
  let checkedout = false

  try {
    const rl = readline.createInterface({
      input: createReadStream(filePath),
    })

    rl.on('line', async (line) => {
      if (line === `import './modern-normalize.css'`) {
        checkedout = true
      }
    })

    await events.once(rl, 'close')
  } catch (err) {
    return false
  }
  return checkedout
}

const expressionCommented = /[/+ ]import '.\/modern-normalize.css'/gi
const expression = /import '.\/modern-normalize.css'/gi

const readData = (err, data) => {
  try {
    if (data === expressionCommented) return false
    if (data === expression) return true
    return false
  } catch (e) {
    return err
  }
}

readIt('./index.jsx', 'utf8', readData)
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
