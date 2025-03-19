import { HttpStatus } from './http-status-messages';
class HttpError extends Error {
  statusCode: HttpStatus;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default HttpError;
