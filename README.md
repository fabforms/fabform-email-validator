
# simple-email-validation

> A lightweight, robust email validation utility for JavaScript — no exceptions, just reliable checks with a widely trusted regex pattern.

[![npm version](https://img.shields.io/npm/v/simple-email-validation.svg)](https://www.npmjs.com/package/simple-email-validation)
[![License](https://img.shields.io/npm/l/simple-email-validation.svg)](LICENSE)
[![Sponsor](https://img.shields.io/badge/sponsor-FabForm-blue.svg)](https://fabform.io)

---

## Features

* Validates email addresses with a comprehensive, widely trusted regex.
* Handles edge cases like consecutive dots and domain formatting.
* Simple, zero-dependency function.
* No exceptions thrown — returns `true` or `false` for easy integration.
* Ideal for both frontend and backend use.

---

## Installation

```bash
npm install simple-email-validation
```

or using Yarn:

```bash
yarn add simple-email-validation
```

---

## Usage

```js
const validateEmail = require('simple-email-validation');

console.log(validateEmail('test@example.com'));  // true
console.log(validateEmail('invalid-email'));     // false
```

---

## API

### `validateEmail(email: string): boolean`

* **email** — The email address string to validate.
* Returns `true` if the email is valid according to the regex and extra rules.
* Returns `false` otherwise.

---

## Why use simple-email-validation?

Unlike minimal or overly simplistic regex validators, this package incorporates additional checks to catch common invalid email pitfalls, like:

* Local part starting or ending with a dot.
* Consecutive dots in the local part.
* Missing domain dots.

It’s a no-nonsense, reliable validator you can trust.

---

## Sponsorship

This package is proudly sponsored by [FabForm](https://fabform.io) — the easy and powerful form backend service trusted by developers worldwide.

If you want hassle-free form backend, spam protection, analytics, and more, check out FabForm:

[https://fabform.io](https://fabform.io)

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/simple-email-validation/issues).

---

## License

MIT © Geoffey Callaghan 

---


