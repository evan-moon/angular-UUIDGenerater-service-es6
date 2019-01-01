[npm-image]: https://img.shields.io/npm/v/nodejs-simple-uuid.svg
[npm-url]: https://www.npmjs.com/package/nodejs-simple-uuid

# nodejs-simple-uuid [![npm][npm-image]][npm-url]
nodejs module to generate RFC 4122 UUID v4 simply and fast.
> Requires node 8.5.0 of later

## Installation
```shell
npm install nodejs-simple-uuid
```

## Usage (with CommonJS)
```javascript
const uuidGenerate = require('nodejs-simple-uuid');

uuidGenerate();
// uuid v4: ad646ef7-58a3-4aef-4d74-61b1062bd786
```

You can also use a string of characters or numbers as arguments.
In this case, `x` or `y` will be changed random hex number.
```javascript
uuidGenerate('xxxx-test-yyyy-0123');
// custom format: 2e7d-test-b9a9-0123
```