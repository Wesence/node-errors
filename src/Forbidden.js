const BaseError = require('./BaseError');

/*
 * Forbidden Access error class
 * Should be used in case authentication is successful, but permissions or access is not enough
 */
class Forbidden extends BaseError {
  constructor(message = 'Forbidden', information = {}, code = 403) {
    super(message, information, code);
    this.name = 'Forbidden';
  }
}

module.exports = Forbidden;
