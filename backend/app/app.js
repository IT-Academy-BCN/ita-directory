const express = require('express')
require('express-async-errors')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const expressJSDocSwagger = require('express-jsdoc-swagger')
const path = require('path')
const options = require('./utils/swaggerOptions')
const routes = require('./routes')
const logger = require('./middleware/handlerLogger')

const { loadConstants } = require('./utils/CONSTANTS')

// Check the connection with the DB
loadConstants()

// Initiate the app
const app = express()

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use('/public', express.static(path.join(__dirname, 'public')))

// Middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json({ limit: '50mb', type: 'application/json' }))

// API
expressJSDocSwagger(app)(options)
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Simple, initial route
app.get('/', (req, res) => {
  res.json({ message: 'ITA DIRECTORY API' })
})

// Initialize routes
Object.values(routes).forEach(({ router }, i) => {
  // eslint-disable-next-line no-console
  console.log(`${Object.keys(routes)[i]} has been initialized`)
  app.use(process.env.PREFIX, router)
  app.use(router, logger)
})

module.exports = app
