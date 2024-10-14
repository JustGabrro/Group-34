function Student(name, marks) {
    this.name = name;
    this.marks = marks;

    this.hasPassed = function() {
        const average = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
        return average >= 50;
    };
}

const student1 = new Student('John', [60, 70, 80]);
console.log(student1.hasPassed());

const student2 = new Student('Jane', [40, 30, 45]);
console.log(student2.hasPassed());
