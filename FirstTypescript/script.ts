function sayHello(message: string) {
    alert(message);
}

sayHello("Hello World!");

function ShowName() {
    let name = "John Doe";
    let age: number = 42;

    console.log("His name is " + name + " and his age is " + age);
}

ShowName();

export class Student {
    name: string;
    description: string;
    isLazy: boolean = true;
    constructor(name: string) {
        this.name = name;
    }
}
