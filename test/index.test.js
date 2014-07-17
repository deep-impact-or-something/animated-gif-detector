var path = require('path')
  , fs = require('fs')
  , test = require('tap').test
  , A = require(path.join(process.cwd(), 'index'))
;

test('ctor', function(t) {
  t.ok(new A, 'object is a thing');
  t.end();
});

test('example.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'example.gif')
    , animated = false
  ;
  fs.createReadStream(file)
    .pipe(new A)
    .once('animated', function() { animated = true; })
    .on('finish', function() {
      t.ok(animated, 'is animated');
      t.end();
    });
});

test('GifSample.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'GifSample.gif')
    , animated = false
  ;
  fs.createReadStream(file)
    .pipe(new A)
    .once('animated', function() { animated = true; })
    .on('finish', function() {
      t.notOk(animated, 'is NOT animated');
      t.end();
    });
});

test('Quilt_design_as_46x46_uncompressed_GIF.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'Quilt_design_as_46x46_uncompressed_GIF.gif')
    , animated = false
  ;
  fs.createReadStream(file)
    .pipe(new A)
    .once('animated', function() { animated = true; })
    .on('finish', function() {
      t.notOk(animated, 'is NOT animated');
      t.end();
    });
});


test('SmallFullColourGIF.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'SmallFullColourGIF.gif')
    , animated = false
  ;
  fs.createReadStream(file)
    .pipe(new A)
    .once('animated', function() { animated = true; })
    .on('finish', function() {
      t.ok(animated, 'is animated');
      t.end();
    });
});


test('Sunflower_as_gif_websafe.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'Sunflower_as_gif_websafe.gif')
    , animated = false
  ;
  fs.createReadStream(file)
    .pipe(new A)
    .once('animated', function() { animated = true; })
    .on('finish', function() {
      t.notOk(animated, 'is animated');
      t.end();
    });
});

test('sync => true', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'example.gif');
  var buffer = fs.readFileSync(filePath);
  t.notOk(new A().sync(buffer), 'is animated');
  t.end();
});

test('sync => false', function(t) {
  var filePath = path.join(process.cwd(), 'test', 'files', 'Quilt_design_as_46x46_uncompressed_GIF.gif');
  var buffer = fs.readFileSync(filePath);
  t.notOk(new A().sync(buffer), 'is NOT animated');
  t.end();
});