// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number return true', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number return false', () => {
    expect(isPhoneNumber('12345')).toBe(false);
});
test('valid email return true', () => {
    expect(isEmail('gpayba@ucsd.edu')).toBe(true);
});
test('invalid email return false', () => {
    expect(isEmail('poop')).toBe(false);
});