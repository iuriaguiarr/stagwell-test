const calculateAverage = (grades) => {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;
  return average;
};

module.exports = calculateAverage;
