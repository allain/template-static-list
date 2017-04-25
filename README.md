# template-static-list
[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads]][npm-url]

`template-static-list` is a small template literal function that solves a problem I kept having.

Specifically, I found myself doing something like this every single time I needed to properly handle addresses for example:

```js
let address = [
  r.address,
  r.city,
  r.postalCode,
  r.province,
  r.country
].filter(Boolean).join(', ')
```
The above monstrosity is to get around the very real situation where not all comopnents of the address are given by the user.

Using `tempalate-static-list` I could achieve the same result using:

```js
const l = require('template-static-list')
let address = l`${r.address}, ${city}, ${r.postalCode}, ${r.province}, ${r.country}`
```

The basic idea is that if the value after a string section is null or undefined, then it and the value will be left out of the constructed string.

## Installation

`template-static-list` can be installed via the Yarn or npm clients.

#### Yarn

```bash
❯ yarn add template-static-list
```

#### npm

```bash
❯ npm install --save template-static-list
```

## Contributing

This project can be found in the [https://github.com/allain/template-static-list](https://github.com/allain/template-static-list) repository.

[npm-image]: https://img.shields.io/npm/v/template-static-list.svg
[npm-downloads]: https://img.shields.io/npm/dt/template-static-list.svg
[npm-url]: https://npmjs.org/package/template-static-list
