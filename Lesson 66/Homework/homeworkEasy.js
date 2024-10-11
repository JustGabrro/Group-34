// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log("Number is even")
//     } else {
//         console.log("Number is odd")
//     }
// }


// let numbers = [1, 2, 3, 4, 5];
// if (numbers.length === 0) {
//     console.log("List is empty")
// } else {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log("Sum of numbers: " + sum);
// }


function getList(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        let multiplied = numbers[i] * 3;
        if (multiplied > 20 ) {
            result.push(multiplied);
        }
    }
    console.log(result)
}
let numbers = [2, 4, 6, 8, 10];
getList(numbers);