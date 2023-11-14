import Service from '@ember/service';

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  VERBOSE = 4,
}

export default class LoggerService extends Service {
  logLevel: LogLevel = LogLevel.VERBOSE;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(...args: any[]) {
    super(...args);
  }

  info(...args: unknown[]) {
    if (this.logLevel >= LogLevel.INFO) {
      console.log('INFO: ', ...args);
    }
  }

  debug(...args: unknown[]) {
    if (this.logLevel >= LogLevel.DEBUG) {
      console.log('DEBUG: ', ...args);
    }
  }

  warn(...args: unknown[]) {
    if (this.logLevel >= LogLevel.WARN) {
      console.log('WARN: ', ...args);
    }
  }

  error(...args: unknown[]) {
    if (this.logLevel >= LogLevel.ERROR) {
      console.log('ERROR: ', ...args);
    }
  }

  trace(...args: unknown[]) {
    if (this.logLevel >= LogLevel.VERBOSE) {
      console.log('TRACE: ', ...args);
    }
  }
}

declare module '@ember/service' {
  interface Registry {
    logger: LoggerService;
  }
}
