const isPalindrome = (word) => {
  // Convert the word to lowercase and remove any non-alphanumeric characters
  const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the cleanWord with its reversed version
  const reversedWord = cleanWord.split("").reverse().join("");
  return cleanWord === reversedWord;
};

module.exports = isPalindrome;
