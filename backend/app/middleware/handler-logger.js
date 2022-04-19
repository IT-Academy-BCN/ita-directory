
const logger = require('../../pino-loger/logger');
const {detect} = require('detect-browser');

async function handlerLogger(req, res, next) {

  try {

    const method = await req.method;
    const url = await req.url;
    const browserCheck = await req.headers["user-agent"];
    const browser = detect(browserCheck);

    if (browserCheck.includes('PostmanRuntime')) {
      logger.info(`route access:
        method: ${method} url: ${url} 
        browser: ${req.headers["user-agent"]}`
      );
    } else {
      logger.info(`route access:
        method: ${req.method} url: ${req.url}
        browse: ${browser.name} version: ${browser.version} plataform: ${browser.os}`
      );
    }
  } catch (err) {
    logger.error(`Something went wrong! ${err.message}`)
  }

  next();

};

module.exports = handlerLogger

