import { applyDiscount, divide, isValidEmail, sum } from './calculator';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('adds two negative numbers', () => {
    expect(sum(-2, -3)).toBe(-5);
  });

    it('adds two decimals', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });

});


describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

    it('divides with 0', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

});

describe('applyDiscount', () => {
  it('applies a valid discount', () => {
    expect(applyDiscount(100, 20)).toBe(80);
  });

    it('applies a 0 discount', () => {
    expect(applyDiscount(100, 0)).toBe(100);
  });

    it('applies 150% discount', () => {
    expect(() => applyDiscount(100, 150)).toThrow('Invalid discount');
  });

});


describe('isValidEmail', () => {
  it('returns true for a valid email', () => {
    expect(isValidEmail('josetest1@example.com')).toBe(true);
  });

  it('returns false for an invalid email', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  it('returns false for an email without domain extension', () => {
  expect(isValidEmail('jose@test')).toBe(false);
});

it('returns false for an email with spaces', () => {
  expect(isValidEmail('jose test@x.com')).toBe(false);
});

});