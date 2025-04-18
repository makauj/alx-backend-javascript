export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
        throw new TypeError('Amount must be a number');
    }
  }

  set currency(value) {
    if (typeof value !== 'currency') {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = value;
  }

  convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
