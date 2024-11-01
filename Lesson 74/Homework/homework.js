// Example 1: Create a new <p> element
let paragraph = document.createElement("p");
paragraph.textContent = "This is a new paragraph.";

// Example 2: Create a <button> element
let button = document.createElement("button");
button.textContent = "Click me!";

// Example 3: Create an <h1> element with text
let header = document.createElement("h1");
header.textContent = "Welcome to the Page";

// Example 4: Create an <img> element
let image = document.createElement("img");
image.src = "example.jpg";
image.alt = "Example image";

// Example 5: Create a <ul> element
let unorderedList = document.createElement("ul");

//////////////////////////////////////////////////////////

// Example 1: Append paragraph to a div
document.getElementById("content").appendChild(paragraph);

// Example 2: Append button to the body
document.body.appendChild(button);

// Example 3: Append header to a section
let section = document.createElement("section");
section.appendChild(header);

// Example 4: Append image to a specific div
document.getElementById("imageContainer").appendChild(image);

// Example 5: Append an <li> item to an unordered list
let listItem = document.createElement("li");
listItem.textContent = "List item";
unorderedList.appendChild(listItem);

//////////////////////////////////////////////////////////

// Example 1: Insert paragraph before an existing header
let existingHeader = document.querySelector("h2");
document.body.insertBefore(paragraph, existingHeader);

// Example 2: Insert button before another button
let existingButton = document.getElementById("oldButton");
document.body.insertBefore(button, existingButton);

// Example 3: Insert a new list item at the beginning of a list
unorderedList.insertBefore(listItem, unorderedList.firstChild);

// Example 4: Insert image before an existing paragraph
let existingParagraph = document.querySelector(".text");
document.body.insertBefore(image, existingParagraph);

// Example 5: Insert a newly created <div> before an existing section
let newDiv = document.createElement("div");
document.body.insertBefore(newDiv, section);

//////////////////////////////////////////////////////////

// Example 1: Remove a paragraph from a div
let div = document.getElementById("content");
div.removeChild(paragraph);

// Example 2: Remove a specific list item from a list
unorderedList.removeChild(listItem);

// Example 3: Remove a button from the body
document.body.removeChild(button);

// Example 4: Remove an image from a specific container
let container = document.getElementById("imageContainer");
container.removeChild(image);

// Example 5: Remove a section element from the body
document.body.removeChild(section);

//////////////////////////////////////////////////////////

// Example 1: Access the parent of a paragraph and style it
paragraph.parentNode.style.backgroundColor = "lightgray";

// Example 2: Remove the parent node of a specific element
button.parentNode.removeChild(button);

// Example 3: Append a new child to the parent of a specific element
let newPara = document.createElement("p");
image.parentNode.appendChild(newPara);

// Example 4: Access the parent of an <li> item and add text
listItem.parentNode.textContent += " - updated";

// Example 5: Get the parent of a header and change its font
header.parentNode.style.fontFamily = "Arial, sans-serif";

//////////////////////////////////////////////////////////

// Example 1: Replace an old paragraph with a new one
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a replacement paragraph.";
div.replaceChild(newParagraph, paragraph);

// Example 2: Replace an image with another image
let newImage = document.createElement("img");
newImage.src = "newExample.jpg";
newImage.alt = "New example image";
container.replaceChild(newImage, image);

// Example 3: Replace a button with another button
let newButton = document.createElement("button");
newButton.textContent = "New Button";
document.body.replaceChild(newButton, button);

// Example 4: Replace a section with a new <div>
let replacementDiv = document.createElement("div");
document.body.replaceChild(replacementDiv, section);

// Example 5: Replace a list item in an unordered list
let newListItem = document.createElement("li");
newListItem.textContent = "Replaced item";
unorderedList.replaceChild(newListItem, listItem);


// ეს ყველა მაგალითი გამოიყენება იმისთვის თუ როგორ შევქმნათ manipulate ან remove ელემენტები DOMის გამოყენებით 