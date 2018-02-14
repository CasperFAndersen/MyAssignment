
let Amount = 100;
const Buzz = "buzz";
const Fizz = "Fizz";
//const

alert("Hello World");
console.log("Virker det her fis?");

function function1() {
    console.log("Function 1 has been called.");
}

function function2() {
    return Amount;
}

function functionYesNo() {
    let stopPrompt = true;
    let YesOrNo = 'test';

    while (stopPrompt === true) {
        YesOrNo = prompt("Is Mikkel at school?");
        if (YesOrNo == 'yes') {
            console.log("Ugens Gæst!!!!!!!!!");
            stopPrompt = false;
        } else if (YesOrNo == 'no') {
            console.log("standard dag i ugen, mikkelIsNotHere");
            stopPrompt = false;
        }
    }
}


function fizzBuzz() {
    let ourNumbers = 100;
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCounter = 0;

    for (let i = 1; i <= ourNumbers; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
            fizzBuzzCounter++;
        } else if (i % 3 == 0) {
            console.log("Fizz");
            fizzCount++;
        } else if (i % 5 == 0) {
            console.log("Buzz");
            buzzCount++;
        }
        else {
            console.log(i);
        }
    }
    console.log('Number of Fizz:' + fizzCount + 'Buzz:' + buzzCount + 'fizzbuzz:' + fizzBuzzCounter);
}

