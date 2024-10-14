function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function() {
        return this.width * this.height;
    };
}

const rect1 = new Rectangle(10, 5);
console.log(rect1.area());