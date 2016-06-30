var path = require('path')
  , fs = require('fs')
  , stream = require('stream')
  , test = require('tap').test
  , animated = require(path.join(process.cwd(), 'index'))
;

test('ctor', function(t) {
  t.ok(animated(), 'object is a thing');
  t.end();
});

test('example.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'example.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.ok(result, 'is animated');
      t.end();
    });
});

test('GifSample.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'GifSample.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('Quilt_design_as_46x46_uncompressed_GIF.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'Quilt_design_as_46x46_uncompressed_GIF.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});


test('SmallFullColourGIF.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'SmallFullColourGIF.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.ok(result, 'is animated');
      t.end();
    });
});


test('Sunflower_as_gif_websafe.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'Sunflower_as_gif_websafe.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is animated');
      t.end();
    });
});

test('postcard.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'postcard.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('1E3A0FFF2F0ED7F3DD8DAE5CC461494E.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', '1E3A0FFF2F0ED7F3DD8DAE5CC461494E.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('09_24_14_Better_Together_GC_Event_FD.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', '09_24_14_Better_Together_GC_Event_FD.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('21.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', '21.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});


test('calendar_265x230.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'calendar_265x230.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('2026556_rw_nl_160X250.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', '2026556_rw_nl_160X250.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('connections.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'connections.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('block-7.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'block-7.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('PSP14_728-x-90_HOUZZ.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'PSP14_728-x-90_HOUZZ.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('daily-idea-header.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'daily-idea-header.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('b_cc_email14.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'b_cc_email14.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('generic-header.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'generic-header.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is NOT animated');
      t.end();
    });
});

test('colbert', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'colbert.gif');
  var buffer = fs.readFileSync(filePath);
  t.ok(animated(buffer), 'is animated');
  t.end();
});

test('sync => true', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'example.gif');
  var buffer = fs.readFileSync(filePath);
  t.ok(animated(buffer), 'is animated');
  t.end();
});

test('sync => false', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'Quilt_design_as_46x46_uncompressed_GIF.gif');
  var buffer = fs.readFileSync(filePath);
  t.notOk(animated(buffer), 'is NOT animated');
  t.end();
});

test('sync => false (non-GIF: PNG)', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'Physical-Representations-of-Data.png');
  var buffer = fs.readFileSync(filePath);
  t.notOk(animated(buffer), 'is NOT animated');
  t.end();
});

test('streaming => false (non-GIF: PNG)', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'Physical-Representations-of-Data.png')
    , result = false
  ;
  fs.createReadStream(filePath)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      t.notOk(result, 'is animated');
      t.end();
    })
  ;
});

test('streaming => infinite buffer', function(t) {
  var readable = new stream.Readable;
  var timeout = setTimeout(function() {
    throw new Error('it did not exit the infinite buffer');
  }, 200);
  readable._read = function() {
    this.push(new Buffer('infinite')); // this readable never ends
  };
  readable
    .pipe(animated())
    .on('finish', function() {
      clearTimeout(timeout);
      t.ok(true, 'it ended despite infinite buffer');
      t.end();
    })
  ;
});

test('sync => false (non-image)', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'file.txt');
  var buffer = fs.readFileSync(filePath);
  t.notOk(animated(buffer), 'is NOT animated');
  t.end();
});

test('sync => false (non-buffer)', function(t) {
  t.notOk(animated({foo: 'bar' }), 'is NOT animated');
  t.end();
});

test('processing => large-size-not-animated.gif', function(t) {
  var timeout = setTimeout(function() {
    throw new Error('it is taking more than 10 seconds in processing large-size-not-animated.gif');
  }, 10000);

  var file = path.join(process.cwd(), 'test', 'files', 'large-size-not-animated.gif')
    , result = false
  ;
  fs.createReadStream(file)
    .pipe(animated())
    .once('animated', function() { result = true; })
    .on('finish', function() {
      clearTimeout(timeout);
      t.notOk(result, 'is NOT animated and did not timeout');
      t.end();
    });
});
