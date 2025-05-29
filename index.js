// index.js
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!regex.test(email)) return false;

  const [local, domain] = email.split('@');

  if (local.startsWith('.') || local.endsWith('.')) return false;
  if (local.includes('..')) return false;  // Prevent consecutive dots in local part
  if (domain.indexOf('.') === -1) return false;

  return true;
}

module.exports = validateEmail;

