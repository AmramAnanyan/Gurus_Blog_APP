export const enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export const HttpMessages: Record<HttpStatus, string> = {
  [HttpStatus.ACCEPTED]:
    'The request has been accepted for processing, but it is not completed yet.',
  [HttpStatus.OK]:
    'The request was successful, and the server responded with the requested data.',
  [HttpStatus.CREATED]: 'The resource was successfully created on the server.',
  [HttpStatus.NO_CONTENT]:
    'The request was successful, but there is no content to return.',
  [HttpStatus.BAD_REQUEST]:
    'The request is malformed or contains invalid parameters.',
  [HttpStatus.UNAUTHORIZED]: 'Authentication is required or has failed.',
  [HttpStatus.FORBIDDEN]: 'You do not have permission to access this resource.',
  [HttpStatus.NOT_FOUND]: 'The requested resource could not be found.',
  [HttpStatus.METHOD_NOT_ALLOWED]:
    'The HTTP method used is not allowed for this endpoint.',
  [HttpStatus.CONFLICT]:
    'There is a conflict with the current state of the resource.',
  [HttpStatus.UNPROCESSABLE_ENTITY]:
    'The server understands the request, but it cannot be processed due to semantic errors.',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'An unexpected server error occurred.',
  [HttpStatus.NOT_IMPLEMENTED]:
    'The server does not support the requested functionality.',
  [HttpStatus.BAD_GATEWAY]:
    'The server received an invalid response from an upstream server.',
  [HttpStatus.SERVICE_UNAVAILABLE]:
    'The server is currently unavailable, possibly due to maintenance.',
  [HttpStatus.GATEWAY_TIMEOUT]:
    'The server did not receive a timely response from an upstream server.',
};
