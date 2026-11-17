import { sum } from './calculator';

describe('sum', () => {
  it('adds two positive numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

