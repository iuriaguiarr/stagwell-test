const operations = require("../src/utils/operations");

test("should correctly perform addition", () => {
  expect(operations["+"](2, 3)).toBe(5);
  expect(operations["+"](10, -5)).toBe(5);
  expect(operations["+"](0.1, 0.2)).toBeCloseTo(0.3, 5); // Use toBeCloseTo for floating-point numbers
});

test("should correctly perform subtraction", () => {
  expect(operations["-"](10, 5)).toBe(5);
  expect(operations["-"](3, 7)).toBe(-4);
});

test("should correctly perform multiplication", () => {
  expect(operations["*"](2, 3)).toBe(6);
  expect(operations["*"](0, 100)).toBe(0);
});

test("should correctly perform division", () => {
  expect(operations["/"](10, 2)).toBe(5);
  expect(operations["/"](1, 3)).toBeCloseTo(0.33333, 5); // Use toBeCloseTo for floating-point numbers
});

test("should handle division by zero", () => {
  expect(operations["/"](5, 0)).toBe(Infinity);
});

test("should return undefined for unknown operations", () => {
  expect(operations["^"]).toBeUndefined();
});
