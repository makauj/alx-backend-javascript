function calculateNumber(a, b) {
  // This function takes two numbers, rounds them and returns their sum.
  a = Math.round(a);
  b = Math.round(b);
  return a + b;
}

module.exports = calculateNumber;
