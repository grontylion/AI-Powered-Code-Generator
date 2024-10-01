import pino from "pino";
import type { Logger } from "pino";

const logger: Logger =
  process.env.NODE_ENV === 'production'
    ? pino({
        level: process.env.PINO_LOG_LEVEL || 'error',
      })
    : pino({
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
          },
          level: process.env.PINO_LOG_LEVEL || 'debug',
        },
      })

export default logger;
