const countVowels = require("../src/utils/countVowels");

test("should return 0 for an empty string", () => {
  expect(countVowels("")).toBe(0);
});

test("should return the correct number of vowels in a sentence", () => {
  expect(countVowels("Hello World")).toBe(3);
});

test("should ignore case and count uppercase vowels", () => {
  expect(countVowels("HELLO")).toBe(2);
});

test("should return 0 when there are no vowels", () => {
  expect(countVowels("rhythm")).toBe(0);
});
