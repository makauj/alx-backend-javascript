const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a successful response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Let Mocha know the test finished successfully
      })
      .catch((err) => done(err)); // In case of error, fail the test
  });

  it('should return undefined when success is false', function () {
    const result = getPaymentTokenFromAPI(false);
    expect(result).to.equal(undefined);
  });
});
