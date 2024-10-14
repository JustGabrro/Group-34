function Student(name, marks) {
    this.name = name;
    this.marks = marks;

    this.hasPassed = function() {
        const average = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
        return average >= 50;
    };
}
