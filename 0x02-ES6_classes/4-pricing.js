export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  defaultFullPrice() {
    return `${this._amount} ${this._currency}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
