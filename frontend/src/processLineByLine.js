/* eslint-disable no-console */
// How to fix "__dirname is not defined in ES module scope
const path = require('path')
const events = require('events')
const fs = require('fs')
const readline = require('readline')

const filePath = path.join(__dirname, 'index.jsx')

console.log('filePath -->', filePath)

const processLineByLine = async () => {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity,
    })

    rl.on('line', (line) => {
      console.log(`Line from file: ${line}`)
    })

    await events.once(rl, 'close')

    console.log('Reading file line by line with readline done.')
    const used = process.memoryUsage().heapUsed / 1024 / 1024
    console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
  } catch (err) {
    console.error(err)
  }
}
processLineByLine()

module.export = processLineByLine
