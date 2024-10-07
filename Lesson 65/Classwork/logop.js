// and = && 

let x = true
let y = false

// console.log(x && y)

// or = ||

let a = true
let b = false

// console.log
(a || b)


let h = false

// console.log
(0 && 5); // 0 (0 is falsy)

// მოსწორო - truthy
    // true
    // 1, 2, 3, 4...  -1, -2, -3, -4...
    // "Level 65", "false", "1"
    // [], {}

// მოარასწორო - falsy
    // false
    // 0, -0
    // ""
    // NaN
    // null
    // undefined - განუსაზღვრელი

let i = -0
let t = "Level 65"

console.log(i && t)

// not = !

let p = true
console.log(!p) // false