// 5) ფუნქცია, რომელიც აბრუნებს მასივის ელემენტების ჯამს
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of array:", sumArray([3, 7, 12, 4]));


// 6) ფუნქცია, რომელიც აბრუნებს ობიექტების name-ფროფერთების მასივს
function getNames(arr) {
    return arr.map(obj => obj.name);
}
console.log("Names array:", getNames([{ name: "Gabriel" }, { name: "Gio" }, { name: "Lidia" }]));


// 7) ობიექტი 3 მეთოდით და 3 ფროფერთით
const myObject = {
    property1: "Ye Buddy",
    property2: 18,
    property3: true,
    method1() {
        return `Property1: ${this.property1}`;
    },
    method2() {
        return `Double of Property2: ${this.property2 * 2}`;
    },
    method3() {
        return `Property3 is ${this.property3}`;
    }
};
console.log(myObject.method1());
console.log(myObject.method2());
console.log(myObject.method3());


// 8) ფუნქცია, რომელიც აბრუნებს ყველაზე პატარა და ყველაზე დიდ სიტყვას
function findSmallestAndLargestWord(text) {
    const words = text.split(" ");
    let smallest = words[0];
    let largest = words[0];

    for (let word of words) {
        if (word.length < smallest.length) smallest = word;
        if (word.length > largest.length) largest = word;
    }

    return [smallest, largest];
}
console.log("Smallest and largest words:", findSmallestAndLargestWord("A hydroelectric power station")); 