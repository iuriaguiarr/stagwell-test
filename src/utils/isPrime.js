// Function to check if a number is prime or not
const isPrimeNumber = (number) => {
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = isPrimeNumber;
