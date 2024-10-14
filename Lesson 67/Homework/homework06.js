function Product(name, price) {
    this.name = name;
    this.price = price;

    this.getDetails = function() {
        console.log(`Product: ${this.name}, Price: ${this.price} USD`);
    };
}
