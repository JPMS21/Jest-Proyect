export function sum(a: number, b: number): number {
  return a + b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}

export function applyDiscount(price: number, percent: number): number {
  if (percent < 0 || percent > 100) throw new Error('Invalid discount');
  return price - (price * percent) / 100;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}