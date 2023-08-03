const isPrimeNumber = require("../src/utils/isPrime");

test("should return false for numbers less than or equal to 1", () => {
  expect(isPrimeNumber(-1)).toBe(false);
  expect(isPrimeNumber(0)).toBe(false);
  expect(isPrimeNumber(1)).toBe(false);
});

test("should return true for prime numbers", () => {
  expect(isPrimeNumber(2)).toBe(true);
  expect(isPrimeNumber(3)).toBe(true);
  expect(isPrimeNumber(5)).toBe(true);
  expect(isPrimeNumber(7)).toBe(true);
  expect(isPrimeNumber(11)).toBe(true);
  expect(isPrimeNumber(13)).toBe(true);
});

test("should return false for non-prime numbers", () => {
  expect(isPrimeNumber(4)).toBe(false);
  expect(isPrimeNumber(6)).toBe(false);
  expect(isPrimeNumber(8)).toBe(false);
  expect(isPrimeNumber(9)).toBe(false);
  expect(isPrimeNumber(10)).toBe(false);
  expect(isPrimeNumber(12)).toBe(false);
});

test("should return true for large prime numbers", () => {
  expect(isPrimeNumber(997)).toBe(true);
  expect(isPrimeNumber(7919)).toBe(true);
});
