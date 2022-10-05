/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
// Import fsPromises

// Node.js program to demonstrate the
// fs.open() Method

const fs = require('fs')

// const readIt = fs.readFile

const expression = /import '.\/modern-normalize.css'/gi

// const readData = (err, data) => {
//   // console.log(data)
//   try {
//     if (data === expressionCommented) return false
//     if (data === expression) return true
//     return false
//   } catch (e) {
//     return err
//   }
// }

// readIt('./index.jsx', 'utf8', readData)
// console.log(readIt('./index.jsx', 'utf8', readData))

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
