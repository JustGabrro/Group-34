function Phone({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;

    this.info = function() {
        console.log(`This is a ${this.brand} ${this.model} priced at ${this.price} USD.`);
    };
}

const phone1 = new Phone({ brand: 'Apple', model: 'iPhone 16', price: 999 });
phone1.info(); 
