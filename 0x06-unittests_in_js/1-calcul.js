function calculateNumber(a, b) {
  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUBTRACT') {
    return a - b;
  }
  if (type === 'DIVIDE') {
    return b === 0 ? 'Error' : a / b;
  }
  if (type === 'SUM') {
    return a + b;
  }
}

module.export = calculateNumber;
