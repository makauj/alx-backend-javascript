export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new DataView(
    new ArrayBuffer(length),
    0,
    length,
  );
  buffer.setInt8(position, value);

  return buffer;
}
