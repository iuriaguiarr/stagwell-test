const calculateFactorial = require("../utils/calculateFactorial");
const getInput = require("../utils/getInput");

// Program to take user input and display the factorial
const main = async () => {
  console.log("Exercise 3 - Factorial");

  const num = parseFloat(
    await getInput("Enter a number to calculate its factorial: ")
  );

  if (isNaN(num) || num < 0) {
    console.log("Please enter a non-negative integer.");
  } else {
    const result = calculateFactorial(num);
    console.log(`The factorial of ${num} is: ${result}`);
  }

  process.exit();
};

main();
