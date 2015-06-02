url-format
==========

```bash
$ npm i --save url-format
```

```javascript
var format = require('url-format');
var url = format('http://google.com/abc/../?q={{q}}', { q: 'nodejs' });
console.log(url);
// http://google.com/?q=nodejs
```
