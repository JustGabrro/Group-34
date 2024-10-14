function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person(`Gabriel`, 17);
person1.introduce();
