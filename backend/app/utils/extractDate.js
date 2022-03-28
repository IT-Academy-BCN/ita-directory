const {prisma} = require("@prisma/client");

async function extractDate(date) {
  console.log(date)
  return date
};

module.exports = extractDate;
