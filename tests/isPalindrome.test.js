const isPalindrome = require("../src/utils/isPalindrome");

test("should return true for a palindrome word", () => {
  expect(isPalindrome("level")).toBe(true);
  expect(isPalindrome("deified")).toBe(true);
  expect(isPalindrome("radar")).toBe(true);
});

test("should return true for a palindrome phrase", () => {
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("Never odd or even")).toBe(true);
});

test("should return false for a non-palindrome word", () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("world")).toBe(false);
});

test("should return false for a non-palindrome phrase", () => {
  expect(isPalindrome("This is not a palindrome")).toBe(false);
});
