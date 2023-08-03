const calculateInvestment = (
  initialCapital,
  interestRate,
  investmentTimeMonths
) => {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue =
    initialCapital * Math.pow(1 + monthlyInterestRate, investmentTimeMonths);
  return finalValue;
};

module.exports = calculateInvestment;
