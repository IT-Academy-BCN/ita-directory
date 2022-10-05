/* eslint-disable no-console */
const fs = require('fs')

const expression = /import '.\/modern-normalize.css'/gi

let check = false
fs.readFile('./index.jsx', 'utf-8', (err, data) => {
  const datarow = data.split(/\r?\n/)
  for (const i in datarow)
    if (datarow[i]) {
      if (datarow[i].match(expression) && datarow[i].length <= 31) {
        check = true
        break
      }
    }
})

console.log('File has been reading Asynchronouly')
setTimeout(() => {
  console.log(check)
}, 100)
