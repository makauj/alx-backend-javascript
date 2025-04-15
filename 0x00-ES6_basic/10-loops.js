export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
  // eslint-disable-next-line guard-for-in
  for (const idx of array) {
    myArray.push(appendString + idx);
  }

  return array;
}
