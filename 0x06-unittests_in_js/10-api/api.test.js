const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('GET / should return status 200', (done) => {
    request.get(url, (err, res) => {
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
    request.get(`${base}/cart/abc`, (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  const base = 'http://localhost:7865';

  it('GET /available_payments should return status 200', (done) => {
    request.get(`${base}/available_payments`, (err, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('GET /available_payments should return correct object', (done) => {
    request.get(`${base}/available_payments`, { json: true }, (err, res, body) => {
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  const base = 'http://localhost:7865';

  it('POST /login should welcome the user', (done) => {
    const options = {
      url: `${base}/login`,
      method: 'POST',
      json: {
        userName: 'Alice',
      },
    };
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Alice');
      done();
    });
  });
});
