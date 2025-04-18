export default class Currency {
  constructor(name, code){
    this._name = name;
    this._code = code;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }
  // method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
