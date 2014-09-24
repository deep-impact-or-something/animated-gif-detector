var Writable = require('stream').Writable
  , util = require('util')
  // GIF CONSTANTS. source => http://www.onicos.com/staff/iz/formats/gif.html
  , BLOCK_TERMINATOR = { value: new Buffer('00') }
  , EXTENSION_INTRODUCER = {
        value: new Buffer('21')
      , head: 0
      , tail: 1
    }
  , GRAPHIC_CONTROL_LABEL = {
        value: new Buffer('f9')
      , head: 1
      , tail: 2
    }
  , DELAY_TIME = {
        value: 0 // if there's a delay time, it's animated! 0 means false positive.
      , head: 3
      , tail: 5
    }
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
    result = pointer == BLOCK_TERMINATOR.value &&
             buffer.toString('hex', i + EXTENSION_INTRODUCER.head, i + EXTENSION_INTRODUCER.tail) == EXTENSION_INTRODUCER.value &&
             buffer.toString('hex', i + GRAPHIC_CONTROL_LABEL.head, i + GRAPHIC_CONTROL_LABEL.tail) == GRAPHIC_CONTROL_LABEL.value &&
             buffer.toString('hex', i + DELAY_TIME.head, i + DELAY_TIME.tail) > DELAY_TIME.value;
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