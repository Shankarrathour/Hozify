export function isValidIdentifier(value) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobile = /^[+]?\d{8,15}$/;
  return email.test(value) || mobile.test(value);
}
