let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

function multiply() {

    return num1 * num2
}

let result = multiply();
console.log(result);

function subtract() {

    return num1 - num2
}

let resul = subtract();
console.log(resul);


function divide() {
    return num1 / num2
}

let resu = divide();
console.log(resu);


function fullName() {
    let first = prompt("Enter the first name:");
    let last = prompt("Enter the last name:");
    return first + last
}

let res = fullName();
console.log(res)


function minutesToSeconds() {
    let num = parseInt(prompt("Please enter min: "))
    return num / 60
}
let re = minutesToSeconds();
console.log(re)
