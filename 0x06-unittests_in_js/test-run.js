// run-tests.js
const Mocha = require('mocha');

const mocha = new Mocha();

// List of test files
const testFiles = [
  '0-calcul.test.js',
  '1-calcul.test.js',
  '2-calcul_chai.test.js',
  '3-payment.test.js',
  '4-payment.test.js',
  '5-payment.test.js',
  '6-payment_token.test.js',
  '7-skip.test.js',
];

// Add each file to Mocha
testFiles.forEach((file) => mocha.addFile(file));

// Run the tests
mocha.run((failures) => {
  process.exitCode = failures ? 1 : 0;
});

