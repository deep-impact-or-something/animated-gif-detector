var Writable = require('stream').Writable
  , inherits = require('inherits')
  // GIF CONSTANTS: http://www.matthewflickinger.com/lab/whatsinagif/bits_and_bytes.asp
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
;

inherits(AnimatedGifDetector, Writable);
function AnimatedGifDetector(buffer, options) {
  Writable.call(this, options);
  this.buffer = new Buffer(0);
  this.count = 0;
}

AnimatedGifDetector.prototype.isAnimated = function(buffer) {
  var result = false
  ;
  for (var i = 0; i < buffer.length; i++) {
    result = this.pointer == BLOCK_TERMINATOR.value &&
             buffer.toString('hex', i + EXTENSION_INTRODUCER.head, i + EXTENSION_INTRODUCER.tail) == EXTENSION_INTRODUCER.value &&
             buffer.toString('hex', i + GRAPHIC_CONTROL_LABEL.head, i + GRAPHIC_CONTROL_LABEL.tail) == GRAPHIC_CONTROL_LABEL.value;

    if (result)
      this.count += 1;

    if (this.count > 1)
      return true;
    this.pointer = buffer.toString('hex', i, i + 1);
  }
  return false;
}

AnimatedGifDetector.prototype._write = function(chunk, enc, next) {
  // We can discard the last buffer up to last 2 bytes
  this.buffer = Buffer.concat([this.buffer.slice(-2), chunk]);
  var animated = this.isAnimated(this.buffer)
  ;

  if (this.buffer.length > 4 && this.isGIF == undefined)
    this.isGIF = this.buffer.slice(0, 3).toString() === 'GIF';

  // If it's the first chunk of stream we analyze and is not GIF, stop
  if (this.isGIF === false)
    return this.emit('finish');

  if (animated) {
    this.emit('animated');
    return this.emit('finish');
  }

  next();
};

module.exports = function(buffer) {
  if (buffer) {
    var valid = typeof buffer === 'string'
      || typeof buffer === 'number'
      || Buffer.isBuffer(buffer)
    ;
    if (!valid)
      return false;
    buffer = Buffer.isBuffer(buffer) ? buffer : new Buffer(buffer);
    if (buffer.slice(0, 3).toString() !== 'GIF')
      return false;
    else
      return (new AnimatedGifDetector).isAnimated(buffer);
  }
  return new AnimatedGifDetector;
}
