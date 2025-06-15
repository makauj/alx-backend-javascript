const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 6 when adding 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 6 when adding 1.5 and 4.4', function () {
      assert.strictEqual(calculateNumber('SUM', 1.5, 4.4), 6);
    });
  });

  describe('SUBTRACT', function () {
    it('should return -4 when subtracting 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return -3 when subtracting 1.5 and 4.4', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4.4), -3);
    });
  });

  describe('DIVIDE', function () {
    it('should return 0.2 when dividing 1.4 by 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.3), 'Error');
    });

    it('should return 1 when dividing 4.5 by 4.4', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 4.5, 4.4), 1);
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for invalid operation type', function () {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});
