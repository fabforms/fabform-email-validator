# fabform-email-validator

[![npm version](https://img.shields.io/npm/v/fabform-email-validator.svg)](https://www.npmjs.com/package/fabform-email-validator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A lightweight, reliable email validation utility powered by FabForm.  
Validate emails with a robust regex and simple extra checks to catch common invalid formats — perfect for client- or server-side validation.

---

## Features

- Simple function to validate emails with high accuracy
- Covers most valid email formats without allowing common invalid cases
- Lightweight: zero dependencies, tiny footprint
- Easy to integrate in any Node.js or frontend project

---

## Installation

```bash
npm install fabform-email-validator
````

---

## Usage

```js
const validateEmail = require('fabform-email-validator');

console.log(validateEmail('user@example.com')); // true
console.log(validateEmail('invalid-email@.com')); // false
```

---

## API

### `validateEmail(email: string): boolean`

Returns `true` if the email is valid, otherwise `false`.

---

## Sponsorship

This package is proudly sponsored by **[FabForm](https://fabform.io)** — the easiest way to build and deploy powerful forms without code.

Check out FabForm for form building, validation, and automation that scales with your needs.

---

## Contributing

Contributions and issues are welcome! Please submit pull requests or open issues on [GitHub](https://github.com/fabforms/fabform-email-validator).

---

## License

MIT © FabForm

```

---

