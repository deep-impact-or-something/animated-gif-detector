var Writable = require('stream').Writable
  , util = require('util')
;

util.inherits(AnimatedGifDetector, Writable);
function AnimatedGifDetector(buffer, options) {
  Writable.call(this, options);
  this.buffer = buffer || new Buffer(0);
  this.pointer = 0; //
}

AnimatedGifDetector.prototype._write = function(chunk, enc, next) {
  this.buffer = Buffer.concat([this.buffer, chunk]);
  var value1, value2;
  for (var i = this.pointer; i < this.buffer.length; i++) {
    value1 = this.buffer.toString('hex', i, i + 1);
    value2 = this.buffer.toString('hex', i + 1, i + 2);
    // console.log(this.pointer, value1, value2);
    if (this.pointer == '00' && value1 == '21' && value2 == 'f9')
      this.emit('animated');
    this.pointer = value1;
  }
  next();
};

AnimatedGifDetector.prototype.sync = function(buffer) {
  var result = false;
  for (var i = 0; i < this.buffer.length; i++) {
    value = this.buffer.toString('hex', i, i + 1);
    if (pointer == '00' && value == '21') {
      result = true;
      break;
    }
    pointer = value;
  }
  return result;
};


/*
var fs = require('fs')
  , headers = require('./lib/offsets').headers

  , buffer = []
;

fs.createReadStream('./test/files/GifSample.gif')
  .on('data', buffer.push.bind(buffer))
  .on('end', function() {
    
    // headers.reduce(function(memo, offset) {
    //   memo = offset.start + offset.length;
    //   var value = this.buffer.slice(offset.start, offset.start + offset.length)
    //                 .toString(offset.encoding)
    //               ;
    //   console.log(offset.description, '=>', value);
    //   return memo;
    // }, 0);
  });
;
*/

module.exports = AnimatedGifDetector;