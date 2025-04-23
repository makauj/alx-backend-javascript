export const weakMap = new WeakMap();

export function queryApi(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  if (count >= 4) {
    throw new Error('Endpoint load is high');
  }
}
