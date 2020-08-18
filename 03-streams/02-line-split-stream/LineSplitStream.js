const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.encoding = options.encoding;
    this.data = '';
  }

  _transform(chunk, encoding, callback) {
    const string = chunk.toString(this.encoding);
    console.log(chunk);
    callback();
  }

  _flush(callback) {
    callback();
  }
}

const lines = new LineSplitStream({
  encoding: 'utf-8',
});

function onData(line) {
  console.log(line);
}

lines.on('data', onData);

lines.write(`первая строка${os.EOL}вторая строка${os.EOL}третья строка`);

lines.end();

module.exports = LineSplitStream;
