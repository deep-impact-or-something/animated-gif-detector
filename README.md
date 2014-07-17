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
  , Animated = require('animated-gif-detector')
;
fs.createReadStream('file.gif')
  .pipe(new Animated)
  .on('animated', function() {
    console.log('detected animation!');
  }); 
;
```

Particularly, you may want to determine animate *as early as possible* in a given HTTP request, and abort the request as soon as you know:

```js
var http = require('http')
  , Animated = require('animated-gif-detector')
;
var req = http.get('http://domain.com/file.gif')
  .pipe(new Animated)
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
  , Animated = require('animated-gif-detector')
;

new Animated().sync(fs.readFileSync('file.gif')) // => true!
```