var Writable = require('stream').Writable
  , util = require('util')
;

util.inherits(AnimatedGifDetector, Writable);
function AnimatedGifDetector(buffer, options) {
  Writable.call(this, options);
  this.buffer = new Buffer(0);
  this.pointer = 0;
  this.isGIF = false;
}

var isAnimated = function(buffer, pointer) {
  var result = false;
  for (var i = 0; i < buffer.length; i++) {
    result = pointer == '00' &&
             buffer.toString('hex', i, i + 1) == '21' &&
             buffer.toString('hex', i + 1, i + 2) == 'f9';
    pointer = buffer.toString('hex', i, i + 1);
    if (result)
      break;
  }
  return { pointer: pointer, animated: result };
}

AnimatedGifDetector.prototype._write = function(chunk, enc, next) {
  this.buffer = Buffer.concat([this.buffer, chunk])
    , result = isAnimated(this.buffer, this.pointer)
  ;

  if (this.buffer.length > 4)
    this.isGIF = this.buffer.slice(0, 3).toString() === 'GIF';

  if (this.isGIF === false)
    return next();

  if (result.animated)
    this.emit('animated');
  this.pointer = result.pointer;
  next();
};

module.exports = function(buffer) {
  if (buffer) {
    buffer = Buffer.isBuffer(buffer) ? buffer : new Buffer(buffer);
    if (buffer.slice(0, 3).toString() !== 'GIF')
      return false;
    else
      return isAnimated(buffer).animated;
  }
  return new AnimatedGifDetector;
}