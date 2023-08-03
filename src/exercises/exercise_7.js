const getInput = require("../utils/getInput");
const calculateAverage = require("../utils/calculateAverage");

// Program to calculate the average of three grades:
const main = async () => {
  console.log("Exercise 7 - Calculate Average");

  const firstValue = parseFloat(
    await getInput("Enter the grade for the first subject: ")
  );

  const secondValue = parseFloat(
    await getInput("Enter the grade for the second subject: ")
  );

  const thirdValue = parseFloat(
    await getInput("Enter the grade for the third subject: ")
  );

  const average = calculateAverage([firstValue, secondValue, thirdValue]);

  console.log(`The average grade is: ${average.toFixed(2)}`);

  process.exit();
};

main();
