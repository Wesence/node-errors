const BaseError = require('./BaseError');

/*
 * Not Found error class
 * Should be used in case the resource is not found, or not discoverable for the request
 */
class NotFound extends BaseError {
    constructor(message = 'Not Found', information = {}, code = 404) {
        super(message, information, code);
        this.httpCode = 404;
        this.name = 'Not Found';
    }
}

module.exports = NotFound;
