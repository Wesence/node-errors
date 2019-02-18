/*
 * Base class representing Error
 */
class BaseError extends Error {
  /*
   * Creates an Error
   * @param {string} [message=Internal Server Error]  Message to show for the error
   * @param {object} [information={}]                 Additional Information to include in the error
   * @param {number} [code=500]                       Code to represent the error
   */
  constructor(message = '', information = {}, code = 500) {
    super();
    this.name = 'Internal Server Error';
    this.httpCode = 500;
    this.code = code || 500;
    this.message = message || this.name;
    this.information = information || {};
  }

  toString(detailed = false) {
    let string = `(${this.code}) ${this.message}`;

    if (detailed && Object.keys(this.information).length) {
      string = `${string}\n${JSON.stringify(this.information)}`;
    }

    return string;
  }

  toObject(extended = false) {
    const object = {
      code: this.code,
      message: this.message,
      info: this.information,
    };

    if (extended) {
      Object.assign(object, { name: this.name, stack: this.stack, httpCode: this.httpCode });
    }

    return object;
  }

  toJSON(extended = false) {
    return this.toObject(extended);
  }
}

module.exports = BaseError;
