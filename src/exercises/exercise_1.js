const getInput = require("../utils/getInput");
const operations = require("../utils/operations");

// Program to take user input and display the operation
const main = async () => {
  console.log("Exercise 1 - Basic operations calculator");

  // Collecting user inputs:
  const firstNumber = parseFloat(await getInput("Enter the first value: "));
  const secondNumber = parseFloat(await getInput("Enter the second value: "));
  const operator = await getInput("Enter operator (+, -, *, /): ");

  if (!operations[operator] || isNaN(firstNumber) || isNaN(secondNumber)) {
    // If a parameter is invalid
    console.log("Invalid operation.");
  } else {
    // If the parameters are valid:
    console.log(operations[operator](firstNumber, secondNumber));
  }

  process.exit();
};

main();
