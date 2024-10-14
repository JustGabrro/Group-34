function Classroom(students) {
    this.students = students;

    this.countStudents = function() {
        console.log(this.students.length);
    };
}
