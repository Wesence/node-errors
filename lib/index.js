const BaseError = require('./BaseError');
const Forbidden = require('./Forbidden');
const NotFound = require('./NotFound');
const InvalidData = require('./InvalidData');
const UnauthorizedAccess = require('./UnauthorizedAccess');

module.exports = {
  Error: BaseError,
  Forbidden,
  NotFound,
  InvalidData,
  UnauthorizedAccess,
};
