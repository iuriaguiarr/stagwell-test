const getInput = require("../utils/getInput");
const displayMultiplicationTable = require("../utils/displayMultiplicationTable");

// Program to display a number multiplication table:
const main = async () => {
  console.log("Exercise 5 - Multiplication Table");

  const num = parseFloat(
    await getInput("Enter a number to display its multiplication table: ")
  );

  if (isNaN(num)) {
    console.log("Please enter a valid number.");
  } else {
    displayMultiplicationTable(num);
  }

  process.exit();
};

main();
