const pino = require('pino');
const fs = require('fs');
const PinoPretty = require('pino-pretty');


const streams = [
  {stream: fs.createWriteStream(`${__dirname}/server.log`, {flags: "a+"})},
  {stream: PinoPretty({singleLine: false, colorize: true, translateTime: "SYS:dd-mm-yyyy HH:MM:ss"}, process.stdout)},

]

const logger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || 'info',
  },
  pino.multistream(streams)
);

module.exports = logger
