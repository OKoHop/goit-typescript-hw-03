/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

export {};

class Car {
  driver: Driver | null = null;
  setDriver(driver: Driver) {
    this.driver = driver;
  }
  startJourney() {
    if (this.driver) {
      this.driver.drive();
    }
  }
}
class Driver {
  drive() {
    console.log("Driving...");
  }
}
const driver = new Driver();
const car = new Car();
car.setDriver(driver);
car.startJourney();
