
const logger = require('../../logger');
async function handlerLogger(req, res, next) {

  try {

    const method = await req.method;
    const url = await req.url;

    logger.info(`route access: method: ${method} url: ${url}`);


  } catch (err) {
    logger.error(`Something went wrong! ${err.message}`)
  }

  next();

};

module.exports = handlerLogger

