const specialParagraph = document.getElementById("specialParagraph");
specialParagraph.addEventListener("click", function() {
    console.log("Student Name: Gabriel Jakhveladze");
});

const classParagraphs = document.getElementByClassName("myClass");
for (let i = 0; i < classParagraphs.length; i++) {
    classParagraphs[i].innerText = `Updated Paragraph ${i + 1}`;
    classParagraphs[i].style.color = "purple";
}