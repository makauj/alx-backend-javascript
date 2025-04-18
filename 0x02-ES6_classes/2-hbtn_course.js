export default class ALXCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  // getter methos
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  //setter methods
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('students must be an array');
    }
    for (const student of value) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = value;
  }
}
