const calculateFactorial = require("../src/utils/calculateFactorial");

test("calcula o fatorial corretamente", () => {
  expect(calculateFactorial(0)).toBe(1); // O factorial of 0 is 1

  expect(calculateFactorial(1)).toBe(1); // O factorial of 1 is 1

  expect(calculateFactorial(5)).toBe(120); // O factorial of 5 is 120

  expect(calculateFactorial(10)).toBe(3628800); // O factorial of 10 is 3628800

  expect(calculateFactorial(3)).toBe(6); // O factorial of 3 is 6
});
