const BaseError = require('./BaseError');

/*
 * Unauthorized Access error class
 * Should be used in case the authorization is required, but is not fulfilled
 */
class UnauthorizedAccess extends BaseError {
  constructor(message = 'Unauthorized Access', information = {}, code = 401) {
    super(message, information, code);
    this.name = 'Unauthorized Access';
  }
}

module.exports = UnauthorizedAccess;
