/* eslint-disable no-param-reassign */
const { PrismaClient } = require('@prisma/client')
const checkAndHashPassword = require('./middleware/checkAndHashPassword')

const prisma = new PrismaClient()

// Middleware to check and Hash the password provided
prisma.$use(checkAndHashPassword)

module.exports = prisma
