const { createInterface } = require("readline");

// Creating the interaction interface:
const readlineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Creating function responsible for capturing entries:
const getInput = (question) =>
  new Promise((resolve) => {
    readlineInterface.question(question, (line) => resolve(line));
  });

module.exports = getInput;
