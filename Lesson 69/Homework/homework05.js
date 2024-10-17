// let numbers = [1, 10, 2, 9, 3, 8];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// numbers.push(4, 7);
// console.log(numbers);


// let array1 = ["I Admire"];
// let array2 = ["Programming"];
// let result = array1.concat(array2);
// console.log(result);


// let items = ["Vinland Saga", "Naruto", "Death note", "Steins;Gate"];
// items.push("Berserk", "One Piece", "Monster");
// console.log(items);
// items.reverse();
// console.log(items)


// let items = ["Vinland Saga", "Naruto", "Death note", "Steins;Gate"];
// let index = items.indexOf("Naruto");
// console.log(index);
// items.splice(index, 1);
// console.log(items);


let items = ["Vinland Saga", "Naruto", "Death note", "Steins;Gate"];
let joinedString = items.join(", ");
console.log(joinedString);
let newArray = joinedString.split(", ");
console.log(newArray);
let hasNaruto = newArray.includes("Naruto");
console.log(hasNaruto);