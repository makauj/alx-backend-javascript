const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('GET / should return status 200', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('GET / should return correct body', (done) => {
    request.get(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const base = 'http://localhost:7865';

  it('GET /cart/12 should return 200 and correct message', (done) => {
    request.get(`${base}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/abc should return 404', (done) => {
    request.get(`${base}/cart/abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /cart/a1b2c3 should return 404', (done) => {
    request.get(`${base}/cart/a1b2c3`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  })

  it('GET /cart/123abc should return 404', (done) => {
    request.get(`${base}/cart/123abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('GET /cart/ should return 404 (no ID)', (done) => {
    request.get(`${base}/cart/`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
