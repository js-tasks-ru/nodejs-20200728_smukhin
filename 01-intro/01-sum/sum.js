function sum(a, b) {
  if ( typeof a === 'number' && typeof b === 'number' ) return a + b;
  throw new TypeError('Arg is not a number');
}

module.exports = sum;
