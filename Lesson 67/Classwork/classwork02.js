function Car(brand, year = 2020) {
    this.brand = brand;
    this.year = year;

    this.describe = function() {
        console.log(`This is a ${this.brand} from ${this.year}.`);
    };
}

const car1 = new Car("Mercedes-Benz CLS", 2017);
const car2 = new Car("Honda Accord");

car1.describe();
car2.describe();
