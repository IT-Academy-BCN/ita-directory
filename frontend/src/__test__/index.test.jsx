import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'

import fs from 'node:fs/promises'

// import readline from 'node:readline'

// import events from 'node:events'
// import { createReadStream, readFile as readIt } from 'node:fs'

// const filePathname = `${__dirname.split('__')[0]}index.jsx`

// const readFile = async (filePath) => {
//   let checkedout = false

//   try {
//     const rl = readline.createInterface({
//       input: createReadStream(filePath),
//     })

//     rl.on('line', async (line) => {
//       if (line === `import './modern-normalize.css'`) {
//         checkedout = true
//       }
//     })

//     await events.once(rl, 'close')
//   } catch (err) {
//     return false
//   }
//   return checkedout
// }

// const expressionCommented = /[/+ ]import '.\/modern-normalize.css'/gi
// const expression = /import '.\/modern-normalize.css'/gi

// const readData = (err, data) => {
//   try {
//     if (data === expressionCommented) return false
//     if (data === expression) return true
//     return false
//   } catch (e) {
//     return err
//   }
// }

// readIt('./index.jsx', 'utf8', readData)

const filePathname = `${__dirname.split('__')[0]}index.jsx`

const expression = /import '.\/modern-normalize.css'/gi

const readMyfile = async () => {
  let check = false
  await fs.readFile(filePathname, 'utf-8', (err, data) => {
    const datarow = data.split(/\r?\n/)
    for (const i in datarow)
      if (datarow[i]) {
        if (datarow[i].match(expression) && datarow[i].length <= 31) {
          check = true
        }
      }
  })
  return check
}

describe('testing normalize: read index.jsx and find out if imported css appears', () => {
  it('should be true if css found out', async () => {
    expect(await readMyfile()).toBe(true)
  })
})
