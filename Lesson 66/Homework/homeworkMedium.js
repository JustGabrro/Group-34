function maxNumber(numbers) {
    if (numbers.length === 0) {
        return null; 
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
let numbers = [2, 4, 6, 8, 10];
console.log(maxNumber(numbers));


function findNumber(num1, num2) {
    if (num1 * num2 > 100) {
        console.log("greater than 100");
    } else {
        console.log("less than 100");
    }
}
findNumber(20, 40);
findNumber(10, 10);