import * as winston from 'winston';
import * as WinstonDaily from 'winston-daily-rotate-file';

const { combine, timestamp, printf } = winston.format;

const logDir = `${process.cwd()}/logs`;

// log 출력 포맷 정의
const logFormat = printf(info => {
  return `${JSON.stringify(
    {
      timestamp: info.timestamp,
      level: info.level,
      message: info.message
    },
    null,
    2
  )}`;
});

export const winstonConfig = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    logFormat
  ),

  transports: [
    new WinstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: '%DATE%-info.log',
      maxSize: '20m',
      json: true,
      zippedArchive: false
    }),

    new WinstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',
      filename: '%DATE%-error.log',
      maxSize: '20m',
      json: true,
      zippedArchive: false
    })
  ]
});
