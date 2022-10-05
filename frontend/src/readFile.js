/* eslint-disable no-console */
// Import fsPromises

// Node.js program to demonstrate the
// fs.open() Method

const fs = require('fs')

// const readIt = fs.readFile

const expressionCommented = /[/+ ]import '.\/modern-normalize.css'/gi
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

fs.readFile('./index.jsx', 'utf-8', (err, data) => {
  console.log(data)
  if (data === expressionCommented) console.log('expressionCommented')
  if (data === expression) return console.log(expression)
  return false
})

console.log('File has been reading Asynchronouly')
