const colors = ["red", "blue", "green"];
let currentIndex = 0;

function changeBack() {
    document.body.style.backgroundColor = colors[currentIndex]; // It Is Example :)
    currentIndex = (currentIndex + 1) % colors.length;
}
setInterval(changeBack, 3000);