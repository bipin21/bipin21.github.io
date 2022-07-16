/**
 * @author BIPIN
 */
// Exercise 1: filter string
console.log("-------Exercise 1: filter string------");
String.prototype.filter = function filter(...words) {
    let str = this.toString();
    for (let i = 0; i < words.length; i++) {
        str = str.replace(words[i], '');
    }
    // words.forEach(
    //     x => {
    //         str = str.replace(x, '')
    //     }
    // )
    return str;
}


console.log("This house is not nice!".filter('not'));

// Exercise 2: bubblesort array
console.log("-------Exercise 2: bubblesort array------");
Array.prototype.bubbleSort = function bubbleSort() {
    let data = this;
    let len = data.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Exercise 3: Person & Teacher Object
console.log("-------Exercise 3: Person & Teacher Object------");
var Person = function () {
};
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

var Teacher = function () {
};
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}
const teacher1 = new Teacher();
teacher1.initialize("Sam");
teacher1.teach("WAP");

// Exercise 3: With Object.create OR
/*
const Person = {
    name: "",
}

const Teacher = Object.create(Person);
Teacher.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

const teacher1 = Object.create(Teacher);
teacher1.name = "Sam";
teacher1.teach("WAP"));*/

// Exercise 4: person, student, professor
console.log("-------Exercise 4: person, student, professor------");
Person.prototype.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.")
}
Person.prototype.salute = function () {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
}
// student
var Student = function () {
};
Student.prototype = new Person();
Student.prototype.greeting = function (major) {
    console.log("Hey, my name is " + this.name + " and I am studying " + major);
}


// professor
var Professor = function () {
};
Professor.prototype = new Person();
Professor.prototype.greeting = function (department) {
    console.log("Good day, my name is " + this.name + " and I am in the " + department + " department.");
}
// show some dat
console.log("------- Student Greeting ------");
const student1 = new Student();
student1.initialize("Bipin", "26");
student1.greeting("CS");

console.log("------- Professor Greeting ------");
const professor1 = new Professor();
professor1.initialize("SAM", "40");
professor1.greeting("Computer Science");