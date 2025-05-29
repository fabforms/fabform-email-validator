// test.js
const validateEmail = require('./index.js');

const validEmails = [
  "simple@example.com",
  "very.common@example.com",
  "disposable.style.email.with+symbol@example.com",
  "other.email-with-hyphen@example.com",
  "fully-qualified-domain@example.co.uk",
  "user.name+tag+sorting@example.com",
  "x@example.com",
  "example-indeed@strange-example.com",
  "example@s.solutions"
];

const invalidEmails = [
  "plainaddress",
  "@missing-local.org",
  "missing-at-sign.net",
  "missingdomain@.com",
  "missingdot@com",
  "two@@signs.com",
  "user@.invalid.com",
  "user@invalid..com",
  "user@invalid-.com",
  "user@-invalid.com",
  ".user@example.com",
  "user.@example.com",
  "user..user@example.com",
];

console.log("Testing valid emails...");
validEmails.forEach(email => {
  const result = validateEmail(email);
  if (result === true) {
    console.log(`✓ Test passed for "${email}"`);
  } else {
    console.log(`✗ Test failed for "${email}": expected true but got ${result}`);
  }
});

console.log("\nTesting invalid emails...");
invalidEmails.forEach(email => {
  const result = validateEmail(email);
  if (result === false) {
    console.log(`✓ Test passed for "${email}"`);
  } else {
    console.log(`✗ Test failed for "${email}": expected false but got ${result}`);
  }
});

