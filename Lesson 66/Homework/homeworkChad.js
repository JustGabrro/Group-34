// function firstAndLast(text) {
//     if (text.length === 0) {
//         console.log("text is empty");
//         return;
//     }


//     const firstChar = text[0];
//     const lastChar = text[text.length - 1];

//     if (firstChar === lastChar) {
//         console.log("They're the same");
//     } else {
//         console.log("They're different");
//     }
// }
// firstAndLast("goal");
// firstAndLast("level");
// firstAndLast("");



function countChar(text) {
    const freq = {};

    for (let char of text) {
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    return freq;
}

const result = countChar("Goal Oriented Academy");
console.log(result);