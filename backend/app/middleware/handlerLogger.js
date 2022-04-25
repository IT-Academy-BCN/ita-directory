
const logger = require('../../logger');
async function handlerLogger(req, res, next) {

  try {

    const method = await req.method;
    const url = await req.url;
    const browser = await req.headers["user-agent"]

    logger.info(`route access: method: ${method} url: ${url} browser: ${browser}`);


  } catch (err) {
    logger.error(`Something went wrong! ${err.message}`)
  }

  next();

};

module.exports = handlerLogger

