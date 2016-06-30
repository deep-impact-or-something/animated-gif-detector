animated-gif-detector
---
Detect animated GIFs from JavaScript buffers.

## Installation

`npm i animated-gif-detector`

## Motivation

Given a readable stream or a buffer directly, determine if a buffer of data is an animated GIF. This helps determine if a document contains cat pics or LOLz.

## Usage

### Streaming

This module is intended to be used as a Writable stream:

```js
var fs = require('fs')
  , animated = require('animated-gif-detector')
;
fs.createReadStream('file.gif')
  .pipe(animated())
  .on('animated', function() {
    console.log('detected animation!');
  }); 
;
```

Particularly, you may want to determine animate *as early as possible* in a given HTTP request, and abort the request as soon as you know:

```js
var http = require('http')
  , animated = require('animated-gif-detector')
;
var req = http.get('http://domain.com/file.gif')
  .pipe(animated())
  .once('animated', function() {
    req.abort();
    // do something else!
  })
;
```

### Sync

If an img is loaded as a buffer directly, a sync function is also available:

```js
var fs = require('fs')
  , animated = require('animated-gif-detector')
;

animated(fs.readFileSync('file.gif')) // => true!
```

## Browserify

This should work as a client-side package if [Browersified](http://browserify.org/).

## Tests

`npm test` runs the tests.

Please contribute weird animated GIFs to the repository to add to the test cases.

## Contributors

Thanks to hard work from the following contributors:

- Bradley Spaulding - [GitHub/bspaulding](https://github.com/bspaulding)
- Vilson Vieira - [GitHub/automata](https://github.com/automata)
- Andreas Lind - [GitHub/papandreou](https://github.com/papandreou)
- Priyank Parashar - [GitHub/paras20xx](https://github.com/paras20xx)
