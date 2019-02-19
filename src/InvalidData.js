const BaseError = require('./BaseError');

/*
 * Invalid Data error class
 * Should be used in case invalid data is provided, or as a replacement for BadRequest
 */
class InvalidData extends BaseError {
  constructor(message = 'Invalid Data', information = {}, code = 400) {
    super(message, information, code);
    this.httpCode = 400;
    this.name = 'Invalid Data';
  }
}

module.exports = InvalidData;
