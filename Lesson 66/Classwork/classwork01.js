let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);