const getInput = require("../utils/getInput");
const isPalindrome = require("../utils/isPalindrome");

// Program to take user input and check if it's a palindrome
const main = async () => {
  console.log("Exercise 4 - Palindrome");

  const word = await getInput("Enter a word to check if it's a palindrome: ");

  if (isPalindrome(word)) {
    console.log(`"${word}" is a palindrome.`);
  } else {
    console.log(`"${word}" is not a palindrome.`);
  }

  process.exit();
};

main();
