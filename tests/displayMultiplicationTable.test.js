const displayMultiplicationTable = require("../src/utils/displayMultiplicationTable");

// Mock console.log to capture the output during testing
const mockConsoleLog = jest.fn();
global.console.log = mockConsoleLog;

test("should display the multiplication table for number 5", () => {
  displayMultiplicationTable(5);
  expect(mockConsoleLog).toHaveBeenCalledTimes(11); // Expecting 11 lines including the header
  expect(mockConsoleLog).toHaveBeenCalledWith("Multiplication Table for 5:");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 1 = 5");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 2 = 10");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 3 = 15");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 4 = 20");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 5 = 25");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 6 = 30");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 7 = 35");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 8 = 40");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 9 = 45");
  expect(mockConsoleLog).toHaveBeenCalledWith("5 x 10 = 50");
});

test("should display the multiplication table for number 7", () => {
  displayMultiplicationTable(7);
  expect(mockConsoleLog).toHaveBeenCalledTimes(22); // Expecting 11 lines including the header
  expect(mockConsoleLog).toHaveBeenCalledWith("Multiplication Table for 7:");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 1 = 7");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 2 = 14");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 3 = 21");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 4 = 28");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 5 = 35");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 6 = 42");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 7 = 49");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 8 = 56");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 9 = 63");
  expect(mockConsoleLog).toHaveBeenCalledWith("7 x 10 = 70");
});
