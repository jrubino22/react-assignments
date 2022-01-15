class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}


class Bootcamp {
    constructor(name, level, students = [], car = []) {
        this.name = name;
        this.level = level;
        this.students = students;
        this.cars = cars;
    }
    registerStudent(student, car) {
        if (this.students.filter(s => s.email === student.email).length){
        console.log(`${student.email} is already registered`)
    }   else {
        this.students.push(student)
        console.log(`Registering ${student.email} to the bootcamp ${this.name}`)
    }
        return this.students;
    }
}
