function calculateNumber(a, b) {
  numA = Math.round(a);
  NumB = Math.round(b);

  if (type === 'SUBTRACT') {
    return numA - NumB;
  }
  if (type === 'DIVIDE') {
    return NumB === 0 ? 'Error' : numA / NumB;
  }
  if (type === 'SUM') {
    return numA + NumB;
  }
}

module.export = calculateNumber;
