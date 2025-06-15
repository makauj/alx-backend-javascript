const assert = require('assert');
const { calculate } = require('./0-calcul');

// Test the calculateNumber function
// test the calculateNumber function does the following:
// - Rounds the first argument to the nearest integer
// - Rounds the second argument to the nearest integer
describe('calculateNumber', function () {
  describe('It should return the sum of two rounded numbers', function () {
    assert.strictEqual(calculate(1.4, 2.6), 4);
    assert.strictEqual(calculate(1.5, 2.5), 5);
    assert.strictEqual(calculate(1.6, 2.4), 5);
    assert.strictEqual(calculate(1.5, -2.5), -1);
    assert.strictEqual(calculate(-1.5, -2.5), -4);
    assert.strictEqual(calculate(-1.4, -2.6), -4);
    assert.strictEqual(calculate(1.5, 20), 22);
    assert.strictEqual(calculate(20.5, 0), 21);
    assert.strictEqual(calculate(0, 20.5), 21);
  });
    it('should handle edge cases', function () {
        assert.strictEqual(calculate(0, 0), 0);
        assert.strictEqual(calculate(0.5, 0.5), 1);
        assert.strictEqual(calculate(-0.5, -0.5), -1);
        assert.strictEqual(calculate(1.5, 0), 2);
        assert.strictEqual(calculate(0, 2.5), 3);
    });
}
);
