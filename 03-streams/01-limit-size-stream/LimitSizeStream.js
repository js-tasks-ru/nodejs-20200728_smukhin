const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.limit = options.limit;
    this.dataAmount = 0;
  }
  _transform(chunk, encoding, callback) {
    this.dataAmount += chunk.length;
    if ( this.dataAmount > this.limit ) {
      callback(new LimitExceededError('to much data'));
      return;
    }
    callback(null, chunk);
  }
}
module.exports = LimitSizeStream;
