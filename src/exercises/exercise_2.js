const getInput = require("../utils/getInput");
const isPrimeNumber = require("../utils/isPrime");
const operations = require("../utils/operations");

// Program to print the first 10 prime numbers
const main = async () => {
  console.log("Exercise 2 - List of prime numbers");

  let count = 0;
  let number = 2; // Start checking from 2 (the first prime number)

  while (count < 10) {
    if (isPrimeNumber(number)) {
      console.log(number);
      count++;
    }
    number++;
  }

  process.exit();
};

main();
