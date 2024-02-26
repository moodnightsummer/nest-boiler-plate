import { winstonConfig } from '@app/config';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { log } from 'console';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;

    const loggerObj = {
      url: `[${method}] ${ip}${originalUrl}`
    };

    response.on('finish', () => {
      const { statusCode } = response;
      this.logger.log(`${method} ${originalUrl} ${statusCode} ${ip}`);
    });

    winstonConfig.info(loggerObj);
    next();
  }
}
