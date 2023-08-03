const calculateInvestment = require("../src/utils/calculateInvestment");

test("calculate the final investment amount correctly", () => {
  const result1 = calculateInvestment(1000, 0.5, 12);
  expect(result1).toBeCloseTo(1005.01, 2);

  const result2 = calculateInvestment(5000, 1, 24);
  expect(result2).toBeCloseTo(5100.96, 2);

  const result3 = calculateInvestment(2000, 0, 6);
  expect(result3).toBe(2000);

  const result4 = calculateInvestment(3000, -0.2, 36);
  expect(result4).toBeCloseTo(2982.052, 2);
});
