const getInput = require("../utils/getInput");
const countVowels = require("../utils/countVowels");

// Program to count vowels in a sentence:
const main = async () => {
  console.log("Exercise 6 - Count Vowels");

  const sentence = (
    await getInput("Enter a sentence to count the number of vowels: ")
  ).trim();

  const numVowels = countVowels(sentence);

  console.log(`The sentence "${sentence}" has ${numVowels} vowel(s).`);

  process.exit();
};

main();
