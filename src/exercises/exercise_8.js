const getInput = require("../utils/getInput");
const calculateInvestment = require("../utils/calculateInvestment");

// Program to calculate the average of three grades:
const main = async () => {
  console.log("Exercise 7 - Calculate Average");

  const initialCapital = parseFloat(
    await getInput("Enter the initial capital: ")
  );

  if (isNaN(initialCapital) || initialCapital <= 0) {
    console.log(
      "Please enter a valid positive number for the initial capital."
    );
    process.exit();
  }

  const interestRate = parseFloat(
    await getInput("Enter the interest rate (annual percentage): ")
  );

  if (isNaN(interestRate) || interestRate < 0) {
    console.log(
      "Please enter a valid non-negative number for the interest rate."
    );
    process.exit();
  }

  const investmentTimeMonths = parseFloat(
    await getInput("Enter the investment time in months: ")
  );

  if (isNaN(investmentTimeMonths) || investmentTimeMonths <= 0) {
    console.log(
      "Please enter a valid positive integer for the investment time."
    );
    process.exit();
  }

  const finalValue = calculateInvestment(
    initialCapital,
    interestRate,
    investmentTimeMonths
  );
  console.log(`The final value of the investment is: ${finalValue.toFixed(2)}`);

  process.exit();
};

main();
