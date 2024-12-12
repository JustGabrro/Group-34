// Task 1: Basic Counter
let basicCounter = 0;

const basicCounterValue = document.getElementById("basicCounterValue");
const basicIncrementBtn = document.getElementById("basicIncrementBtn");
const basicDecrementBtn = document.getElementById("basicDecrementBtn");
const basicResetBtn = document.getElementById("basicResetBtn");

function updateBasicCounter() {
    basicCounterValue.textContent = basicCounter;
    basicCounterValue.style.color = basicCounter < 0 ? "red" : "green";
}

basicIncrementBtn.addEventListener("click", () => {
    basicCounter++;
    updateBasicCounter();
});

basicDecrementBtn.addEventListener("click", () => {
    basicCounter--;
    updateBasicCounter();
});

basicResetBtn.addEventListener("click", () => {
    basicCounter = 0;
    updateBasicCounter();
});

// Task 2: Enhanced Counter with Input
let enhancedCounter = 0;
let enhancedResetCount = 0;

const enhancedCounterValue = document.getElementById("enhancedCounterValue");
const enhancedIncrementBtn = document.getElementById("enhancedIncrementBtn");
const enhancedDecrementBtn = document.getElementById("enhancedDecrementBtn");
const enhancedResetBtn = document.getElementById("enhancedResetBtn");
const enhancedInputValue = document.getElementById("enhancedInputValue");

function updateEnhancedCounter() {
    enhancedCounterValue.textContent = enhancedCounter;
    enhancedCounterValue.style.color = enhancedCounter < 0 ? "red" : "green";
}

enhancedIncrementBtn.addEventListener("click", () => {
    const value = parseInt(enhancedInputValue.value);
    if (value >= -100 && value <= 100) {
        enhancedCounter += value;
        updateEnhancedCounter();
    } else {
        alert("Please enter a value between -100 and 100.");
    }
});

enhancedDecrementBtn.addEventListener("click", () => {
    const value = parseInt(enhancedInputValue.value);
    if (value >= -100 && value <= 100) {
        enhancedCounter -= value;
        updateEnhancedCounter();
    } else {
        alert("Please enter a value between -100 and 100.");
    }
});

enhancedResetBtn.addEventListener("click", () => {
    if (enhancedResetCount > 0) {
        alert("You cannot reset the counter multiple times.");
    } else {
        enhancedResetCount++;
        enhancedCounter = 0;
        updateEnhancedCounter();
    }
});

// Task 3: Dynamic Counter Generator
let counterId = 0;

const addCounterBtn = document.getElementById("addCounterBtn");
const countersDiv = document.getElementById("counters");

addCounterBtn.addEventListener("click", () => {
    if (counterId < 3) {
        counterId++;
        createCounter(counterId);
    }
});

function createCounter(id) {
    const counterBlock = document.createElement("div");
    counterBlock.classList.add("counter-block");

    let counter = 0;
    let history = [];
    let historyIndex = -1;

    const counterValue = document.createElement("div");
    counterValue.classList.add("counter");
    counterValue.textContent = counter;

    const inputValue = document.createElement("input");
    inputValue.type = "number";
    inputValue.placeholder = "Enter increment/decrement value";

    const incrementBtn = document.createElement("button");
    incrementBtn.textContent = "Increment";

    const decrementBtn = document.createElement("button");
    decrementBtn.textContent = "Decrement";

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";

    const lockCheckbox = document.createElement("input");
    lockCheckbox.type = "checkbox";
    const lockLabel = document.createElement("label");
    lockLabel.textContent = "Lock";

    const undoBtn = document.createElement("button");
    undoBtn.textContent = "Undo";

    const redoBtn = document.createElement("button");
    redoBtn.textContent = "Redo";

    counterBlock.append(counterValue, inputValue, incrementBtn, decrementBtn, resetBtn, lockCheckbox, lockLabel, undoBtn, redoBtn);
    countersDiv.appendChild(counterBlock);

    incrementBtn.addEventListener("click", () => {
        if (!lockCheckbox.checked) {
            const value = parseInt(inputValue.value);
            if (value >= -100 && value <= 100) {
                history.push(counter);
                historyIndex++;
                counter += value;
                counterValue.textContent = counter;
            }
        }
    });

    decrementBtn.addEventListener("click", () => {
        if (!lockCheckbox.checked) {
            const value = parseInt(inputValue.value);
            if (value >= -100 && value <= 100) {
                history.push(counter);
                historyIndex++;
                counter -= value;
                counterValue.textContent = counter;
            }
        }
    });

    resetBtn.addEventListener("click", () => {
        if (!lockCheckbox.checked) {
            history.push(counter);
            historyIndex++;
            counter = 0;
            counterValue.textContent = counter;
        }
    });

    undoBtn.addEventListener("click", () => {
        if (historyIndex >= 0) {
            counter = history[historyIndex];
            historyIndex--;
            counterValue.textContent = counter;
        }
    });

    redoBtn.addEventListener("click", () => {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            counter = history[historyIndex];
            counterValue.textContent = counter;
        }
    });
}
