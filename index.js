var Writable = require('stream').Writable
  , util = require('util')
;

util.inherits(AnimatedGifDetector, Writable);
function AnimatedGifDetector(buffer, options) {
  Writable.call(this, options);
  this.buffer = buffer || new Buffer(0);
  this.pointer = 0; //
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
  if (result.animated)
    this.emit('animated');
  this.pointer = result.pointer;
  next();
};

AnimatedGifDetector.prototype.sync = function(buffer) {
  buffer = Buffer.isBuffer(buffer) ? buffer : new Buffer(buffer);
  return isAnimated(buffer).animated;
};

module.exports = AnimatedGifDetector;