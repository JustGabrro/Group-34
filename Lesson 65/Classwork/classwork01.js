let a1 = true;
let b1 = false;

let a2 = 1 === 1;
let b2 = 1 > 2;

let a3 = Boolean(0);
let b3 = Boolean(1);

let a4 = 5 > 3;
let b4 = 5 === 5;

let a5 = Boolean("True");
let b5 = Boolean("fALSE");

let a6 = !false;
let b6 = !true;

let a7 = 10 !== 9;
let b7 = 10 === 10;

let a8 = "hello".length > 0;
let b8 = "".length === 0;

let a9 = 5 * 2 === 10;
let b9 = 5 / 2 === 2;

let a10 = Boolean([]);
let b10 = Boolean([1, 2, 3]);


// results
console.log(a1 && b1, a1 || b1);
console.log(a2 && b2, a2 || b2);
console.log(a3 && b3, a3 || b3);
console.log(a4 && b4, a4 || b4);
console.log(a5 && b5, a5 || b5);
console.log(a6 && b6, a6 || b6);
console.log(a7 && b7, a7 || b7);
console.log(a8 && b8, a8 || b8);
console.log(a9 && b9, a9 || b9);
console.log(a10 && b10, a10 || b10);