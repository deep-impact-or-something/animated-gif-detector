var headers = [
    { start: 0, length: 3, description: 'GIF', encoding: '' }
  , { start: 3, length: 3, description: '"87a" or "89a"', encoding: '' }
  , { start: 6, length: 2, description: '<Logical Screen Width>', encoding: 'hex' }
  , { start: 8, length: 2, description: '<Logical Screen Height>', encoding: 'hex' }
  , { start: 10, length: 1, description: '<Color Info>', encoding: 'hex' }
  , { start: 11, length: 1, description: '<Background Color Index>', encoding: 'hex' }
  , { start: 12, length: 1, description: '<Pixel Aspect Ratio>', encoding: 'hex' }
  , { start: 13, length: 1, description: '<Global Color Table(0..255 x 3 bytes) if GCTF is one>', encoding: 'hex' }
];

exports.headers = headers;