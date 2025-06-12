const assert = require('assert');
const { calculate } = require('./1-calcul');

// Test the calculateNumber function
// Test the calculateNumber function does the following:
// - Rounds the first argument to the nearest integer
// - Rounds the second argument to the nearest integer

describe('calculateNumber', function () {
    it('should return the sum of two rounded numbers', function () {
        assert.strictEqual(calculate(1.4, 2.6), 4);
        assert.strictEqual(calculate(1.5, 2.5), 5);
        assert.strictEqual(calculate(1.6, 2.4), 5);
        assert.strictEqual(calculate(1.5, -2.5), -1);
        assert.strictEqual(calculate(-1.5, -2.5), -4);
        assert.strictEqual(calculate(-1.4, -2.6), -4);
        assert.strictEqual(calculate(1.5, 20), 22);
        assert.strictEqual(calculate(20.5, 0), 21);
        assert.strictEqual(calculate(0, 20.5), 21);
    }
    );
    it('should handle edge cases', function () {
        assert.strictEqual(calculate(0, 0), 0);
        assert.strictEqual(calculate(0.5, 0.5), 1);
        assert.strictEqual(calculate(-0.5, -0.5), -1);
        assert.strictEqual(calculate(1.5, 0), 2);
        assert.strictEqual(calculate(0, 2.5), 3);
    });
    it('should return the difference of two rounded numbers', function () {
        assert.strictEqual(calculate(5.4, 2.6, 'SUBTRACT'), 3);
        assert.strictEqual(calculate(1.5, 2.5, 'SUBTRACT'), -1);
        assert.strictEqual(calculate(1.6, 2.4, 'SUBTRACT'), -1);
        assert.strictEqual(calculate(1.5, -2.5, 'SUBTRACT'), 4);
        assert.strictEqual(calculate(-1.5, -2.5, 'SUBTRACT'), 1);
        assert.strictEqual(calculate(-1.4, -2.6, 'SUBTRACT'), 1);
    });
    it('should return the division of two rounded numbers', function () {
        assert.strictEqual(calculate(5.4, 2.6, 'DIVIDE'), 2);
        assert.strictEqual(calculate(1.5, 2.5, 'DIVIDE'), 0.6);
        assert.strictEqual(calculate(1.6, 2.4, 'DIVIDE'), 0.6666666666666666);
        assert.strictEqual(calculate(1.5, -2.5, 'DIVIDE'), -0.6);
        assert.strictEqual(calculate(-1.5, -2.5, 'DIVIDE'), 0.6);
        assert.strictEqual(calculate(-1.4, -2.6, 'DIVIDE'), 0.5384615384615384);
        assert.strictEqual(calculate(1.5, 0, 'DIVIDE'), 'Error');
    });
    it('should handle edge cases with division', function () {
        assert.strictEqual(calculate(0, 0, 'DIVIDE'), 'Error');
        assert.strictEqual(calculate(0.5, 0.5, 'DIVIDE'), 1);
        assert.strictEqual(calculate(-0.5, -0.5, 'DIVIDE'), 1);
        assert.strictEqual(calculate(1.5, 0, 'DIVIDE'), 'Error');
        assert.strictEqual(calculate(0, 2.5, 'DIVIDE'), 0);
        assert.strictEqual(calculate(2.5, 0, 'DIVIDE'), 'Error');
    });
    it('should return the sum of two rounded numbers with type', function () {
        assert.strictEqual(calculate(1.4, 2.6, 'SUM'), 4);
        assert.strictEqual(calculate(1.5, 2.5, 'SUM'), 5);
        assert.strictEqual(calculate(1.6, 2.4, 'SUM'), 5);
        assert.strictEqual(calculate(1.5, -2.5, 'SUM'), -1);
        assert.strictEqual(calculate(-1.5, -2.5, 'SUM'), -4);
        assert.strictEqual(calculate(-1.4, -2.6, 'SUM'), -4);
        assert.strictEqual(calculate(1.5, 20, 'SUM'), 22);
        assert.strictEqual(calculate(20.5, 0, 'SUM'), 21);
        assert.strictEqual(calculate(-7, 20.5, 'SUM'), 14);
    });
    it('should handle edge cases with type', function () {
        assert.strictEqual(calculate(0, 0, 'SUM'), 0);
        assert.strictEqual(calculate(0.5, 0.5, 'SUM'), 1);
        assert.strictEqual(calculate(-0.5, -0.5, 'SUM'), -1);
        assert.strictEqual(calculate(1.5, 0, 'SUM'), 2);
        assert.strictEqual(calculate(0, 2.5, 'SUM'), 3);
    });
    it('should return "Error" for invalid type', function () {
        assert.strictEqual(calculate(1.4, 2.6, 'INVALID'), undefined);
        assert.strictEqual(calculate(1.5, 2.5, 'INVALID'), undefined);
        assert.strictEqual(calculate(1.6, 2.4, 'INVALID'), undefined);
    });
    it('should handle edge cases with invalid type', function () {
        assert.strictEqual(calculate(0, 0, 'INVALID'), undefined);
        assert.strictEqual(calculate(0.5, 0.5, 'INVALID'), undefined);
        assert.strictEqual(calculate(-0.5, -0.5, 'INVALID'), undefined);
        assert.strictEqual(calculate(1.5, 0, 'INVALID'), undefined);
        assert.strictEqual(calculate(0, 2.5, 'INVALID'), undefined);
    });
}
);
