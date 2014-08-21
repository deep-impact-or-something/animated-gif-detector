var path = require('path')
  , fs = require('fs')
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
      t.notOk(result, 'is not animated');
      t.end();
    });
});

test('bf34256561471b09a457cd24e35a99ed9948dc05.gif', function(t) {
  var file = path.join(process.cwd(), 'test', 'files', 'bf34256561471b09a457cd24e35a99ed9948dc05.gif')
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