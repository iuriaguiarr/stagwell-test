const calculateAverage = require("../src/utils/calculateAverage");

test("calculates the average correctly", () => {
  // Caso de teste 1
  const grades1 = [8, 7, 6, 9, 10];
  expect(calculateAverage(grades1)).toBe(8); // The average grade is:  [8, 7, 6, 9, 10] é 8

  // Caso de teste 2
  const grades2 = [5, 5, 5, 5];
  expect(calculateAverage(grades2)).toBe(5); // The average grade is:  [5, 5, 5, 5] é 5

  // Caso de teste 3
  const grades3 = [10, 8, 9];
  expect(calculateAverage(grades3)).toBeCloseTo(9, 2); // The average grade is:  [10, 8, 9] é 9
});
