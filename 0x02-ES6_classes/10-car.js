export default class Car {
 constructor(brand, motor, year) {
    this._brand = brand;
    this._motor = motor;
    this._year = year;
 }
 cloneCar() {
    return new Car(this._brand, this._motor, this._year);
 }
}