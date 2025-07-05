export const validatePhone = (phone: string): boolean =>
  /^09\d{9}$/.test(phone);
