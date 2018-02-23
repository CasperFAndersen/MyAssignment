"use strict";
exports.__esModule = true;
function sayHello(message) {
    alert(message);
}
sayHello("Hello World!");
function ShowName() {
    var name = "John Doe";
    var age = 42;
    console.log("His name is " + name + " and his age is " + age);
}
ShowName();
var Student = /** @class */ (function () {
    function Student(name) {
        this.isLazy = true;
        this.name = name;
    }
    return Student;
}());
exports.Student = Student;
