function getElementByIdAttributes(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.color = "pink";
        element.style.backgroundColor = "brown";
        element.textContent = " Updated Text";
    }
}

getElementByIdAttributes("first")