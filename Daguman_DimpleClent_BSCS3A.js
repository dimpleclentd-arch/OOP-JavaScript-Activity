// VARIABLES 3
let studentName = "Juan";
let age = 18;
let course = "BSCOM";

// ARRAYS 3
let subjects = ["Programming", "Math", "English"];
let grades = [90, 85, 88];
let friends = ["Mark", "John", "Ana"];

// OBJECT LITERALS 2
let studentInfo = {
    name: "Juan",
    age: 18
};

let schoolInfo = {
    name: "ABC College",
    location: "Cagsalasao"
};


// CLASS 1
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("My name is " + this.name);
    }
}


// CLASS 2 - INHERITANCE
class Student extends Person {

    study() {
        console.log(this.name + " is studying.");
    }

    speak() {
        console.log(this.name + " says: I am a student.");
    }
}


// CLASS 3 - INHERITANCE
class Teacher extends Person {

    teach() {
        console.log(this.name + " is teaching.");
    }

    speak() {
        console.log(this.name + " says: I am a teacher.");
    }
}


// CLASS 4
class School {
    constructor(schoolName) {
        this.schoolName = schoolName;
    }

    showSchool() {
        console.log("School: " + this.schoolName);
    }
}


// OBJECTS 4
let student1 = new Student("Juan");
let student2 = new Student("Mark");
let teacher1 = new Teacher("Maria");
let school1 = new School("ABC College");


// ENCAPSULATION 2
student1.name = "Juan";
student2.name = "Mark";


// METHODS 5
student1.introduce();
student1.study();
teacher1.teach();
school1.showSchool();
teacher1.speak();


// CONDITIONALS 3
if (age >= 18) {
    console.log("Juan is an adult.");
}

if (grades[0] >= 75) {
    console.log("Juan passed Programming.");
}

if (course == "BSIT") {
    console.log("Juan is taking BSIT.");
}


// LOOPS 3

// FOR LOOP
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

// WHILE LOOP
let count = 0;

while (count < friends.length) {
    console.log(friends[count]);
    count++;
}

// DO-WHILE LOOP
let number = 1;

do {
    console.log("Number: " + number);
    number++;
} while (number <= 3);


// ABSTRACTION 1
function showStudent() {
    console.log("Student: " + student1.name);
}

showStudent();


// POLYMORPHISM 1
student1.speak();
teacher1.speak();
