
const ipily = require('ipily')
const logger = require('../../pino-loger/logger');
const geoip = require('fast-geoip');
const {detect} = require('detect-browser');
const ip = require('ip');

async function handlerLogger(req, res, next) {

  try {

    const publicIp = await ipily();
    const ipAddress = ip.address();
    const method = await req.method;
    const url = await req.url;
    const language = await req.headers["accept-language"];
    const browserCheck = await req.headers["user-agent"];
    const browser = detect(browserCheck);
    const geo = await geoip.lookup(publicIp);

    if (browserCheck.includes('PostmanRuntime')) {
      logger.info(`route has benn access by:
                                            ip address: ${ipAddress}
                                            method: ${method} 
                                            url: ${url} 
                                            browser: ${req.headers["user-agent"]}`
      );
    } else {
      logger.info(`route has been access by: 
                                            ip address: ${ipAddress}      
                                            ip public: ${publicIp}      
                                            method: ${req.method}         
                                            url: ${req.url}
                                            browse: ${browser.name}       
                                            version: ${browser.version}
                                            plataform: ${browser.os}      
                                            language: ${language}
                                            country: ${geo.country}       
                                            city: ${geo.city}
                                            timezone: ${geo.timezone}`
      );
    }
  } catch (err) {
    logger.error(`Something went wrong! ${err.message}`)
  }

  next();

};

module.exports = handlerLogger

