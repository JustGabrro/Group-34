let userInput = prompt("Enter your age: ");

if (userInput <= 18) {
    console.log("You are not an adult");
} else {
    console.log.apply("You are an adult");
}
