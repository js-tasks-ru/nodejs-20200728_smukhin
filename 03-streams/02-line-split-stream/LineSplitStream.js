const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.encoding = options.encoding;
    this.data = '';
  }

  _transform(chunk, encoding, callback) {
    const string = this.data + chunk.toString(this.encoding);
    const text = string.split(os.EOL);
    this.data = text.pop();

    for (const line of text) {
      this.push(line);
    }
    callback(null);
  }

  _flush(callback) {
    this.push(this.data);
    callback(null);
  }
}
module.exports = LineSplitStream;
